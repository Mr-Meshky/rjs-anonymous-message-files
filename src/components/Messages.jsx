import { useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  List,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Message from "./Message";

import { deleteMessages } from "../services/user";
import { useQuery } from "@tanstack/react-query";

function Messages({ messages, refetch }) {
  const { data } = useQuery(["profile"]);
  const [open, setOpen] = useState(false);
  const deleteRef = useRef();

  const updateHandler = async () => {
    deleteRef.current.classList.add("rotation");
    await refetch();
    deleteRef.current.classList.remove("rotation");
  };

  const deleteAllHandler = () => {
    setOpen(true);
  };

  const cancelHandler = () => {
    setOpen(false);
  };

  const okHadnler = () => {
    deleteMessages()
      .then((res) => {
        toast.success("لیست‌ پیام‌های شما با موفقیت حذف شد");
        refetch();
      })
      .catch((err) => {
        toast.error("مشکلی پیش آمد مجدد تلاش نمایید");
      });
    setOpen(false);
  };

  return (
    <Container>
      <Dialog
        open={open}
        onClose={cancelHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          آیا میخواهید تمام پیام ها را پاک کنید؟
        </DialogTitle>
        <DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button onClick={cancelHandler} variant="outlined">
            انصراف
          </Button>
          <Button
            onClick={okHadnler}
            autoFocus
            variant="outlined"
            color="error"
          >
            تایید
          </Button>
        </DialogActions>
      </Dialog>
      <Container maxWidth="lg">
        <Grid container px={3} textAlign="center">
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="space-between"
            height="fit-content"
            mt={4}
          >
            <Tooltip title="بروزرسانی لیست پیام‌ها">
              <IconButton onClick={updateHandler} ref={deleteRef}>
                <CachedIcon />
              </IconButton>
            </Tooltip>

            <Typography
              variant="h4"
              fontWeight="400"
              component="h1"
              color="gray"
            >
              پیام ها
            </Typography>
            <Tooltip title="حذف همه">
              <IconButton onClick={deleteAllHandler}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid item xs={12} mt={5} mb={-8}>
            <List>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  message={message}
                  refetch={refetch}
                  name={data.data.displayName}
                />
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Messages;
