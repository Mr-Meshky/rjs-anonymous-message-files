import toast from "react-hot-toast";
import { Box, IconButton, ListItem, Tooltip } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import DownloadIcon from "@mui/icons-material/Download";

import { toIranianTime, whatLanguage } from "../utils/helper";
import { deleteMessage } from "../services/user";
import { createStory } from "../utils/storyCreator";

function Message({ message, refetch, name }) {
  const deleteHandler = () => {
    deleteMessage(message.id)
      .then((res) => {
        toast.success("پیام مورد نظر با موفقیت حذف شد");
        refetch();
      })
      .catch((err) => {
        toast.error("مشکلی پیش آمد مجدد تلاش نمایید");
      });
  };

  const storyHandler = () => {
    createStory(message.text, name);
  };

  return (
    <ListItem
      key={message.id}
      sx={{
        marginBottom: "7px",
        borderRadius: "7px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        textAlign={whatLanguage(message.text) === "ltr" ? "left" : "right"}
        sx={{ direction: whatLanguage(message.text) }}
        width="100%"
      >
        <ListItemText
          primary={message.text}
          secondary={toIranianTime(message.postage_date)}
        />

        <Box display="flex" alignItems="center">
          <Tooltip
            title="دانلود استوری"
            onClick={storyHandler}
            sx={{ height: "fit-content" }}
          >
            <IconButton edge="end" aria-label="delete">
              <DownloadIcon />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="حذف"
            onClick={deleteHandler}
            sx={{ height: "fit-content" }}
          >
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </ListItem>
  );
}

export default Message;
