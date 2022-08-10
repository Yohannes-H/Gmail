import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./EmailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "./Section";
import EmailRow from "./EmailRow";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = React.useState([]);
  console.log("emails state", emails);
  React.useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const EMAILS = [];
      querySnapshot.forEach((doc) => {
        EMAILS.push({ id: doc.id, data: doc.data() });
        // setEmails((prevEmail) => [
        //   ...prevEmail,
        //   { id: doc.id, data: doc.data() },
        // ]);
        setEmails([...EMAILS]);
      });

      console.log("emails in useEffect", EMAILS);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        {emails?.map(
          ({ id, data: { message, to, timestamp, subject } }, index) => (
            <EmailRow
              id={index}
              key={index}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          )
        )}
      </div>
    </div>
  );
}

export default EmailList;
