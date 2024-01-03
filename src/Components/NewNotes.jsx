import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNOTE } from "../Redux/Action";
import { useNavigate } from "react-router-dom";

import { NoteAdded } from "./Message";
import { Input, Textarea, Button, Card } from "@material-tailwind/react";

const NewNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isNoteAdded, setIsNoteAdded] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const AddNotes = (e) => {
    e.preventDefault();
    dispatch(AddNOTE(title, description));
    setTitle("");
    setDescription("");

    setIsNoteAdded(true);
    setTimeout(() => {
      setIsNoteAdded(false);
    }, 1000);

    setTimeout(() => {
      navigate("/notes");
    }, 1000);
  };

  return (
    <div className="grid grid-flow-row gap-10 justify-center items-center w-[100%] xl:grid xl:grid-flow-col xl:gap-40 xl:min-h-[50vh] xl:w-[100%]">
      {isNoteAdded && <NoteAdded />}
      <img className="size-96 mx-auto" src="./images/image.png" alt="My Notes Image" />
      <Card className=" w-[90%] lg:w-[450px] bg-white shadow-black md:flex md:justify-center md:flex-col p-10 mx-auto" id="radial">
        <form onSubmit={AddNotes} className="flex flex-col">
          <div className="w-full my-5 ">
            <Input
              label="Enter Note Title"
              type="text"
              value={title}
              variant="standard"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-full my-5">
            <Textarea
              label="Enter Something...."
              type="text"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={8}
            />
          </div>
          <Button color="blue" className="mt-5 bg-pink-700" type="submit">
            Add Note
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewNotes;
