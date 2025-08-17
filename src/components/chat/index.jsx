import { Container, Grid } from "@mui/material";
import BreakCumb from "../breakcumb";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const ChatContainer = () => {
  return (
    <Container style={{ height: "100vh" }}>
      <BreakCumb dataProp="Chat" />
      <Grid item lg={12} md={12} sm={12} xs={12} className='d-flex justify-content-around'>
        <Grid style={{width:'25%'}}>
          <ChatList />
        </Grid>
        <Grid style={{width:'65%'}}>
          <ChatWindow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ChatContainer;
