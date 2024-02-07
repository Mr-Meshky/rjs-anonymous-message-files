import { useQuery } from "@tanstack/react-query";

import Loader from "../components/Loader";
import Messages from "../components/Messages";
import MessageNotfound from "../components/MessageNotfound";

import { getMessages } from "../services/user";

function PanelPage() {
  const { data, refetch, isLoading, isError } = useQuery(
    ["messages"],
    getMessages
  );

  if (isLoading) return <Loader />;

  if (isError) return <MessageNotfound />;

  return <Messages messages={data.data.reverse()} refetch={refetch} />;
}

export default PanelPage;
