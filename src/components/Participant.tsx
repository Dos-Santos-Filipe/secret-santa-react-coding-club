import { useState } from "react";
import { Button } from "./Button";

interface Props {
  onClick: (participant: string) => void;
}
export const Participant = ({ onClick }: Props) => {
  const [newParticipant, setNewParticipant] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewParticipant(event.target.value);
  };

  const handleAdd = () => {
    if (newParticipant.trim() !== "") {
      onClick(newParticipant.trim());
      setNewParticipant("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && handleAdd();
  };

  return (
    <div className="participant">
      <p>Insert a participant</p>
      <input
        type="text"
        value={newParticipant}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <Button className="addBtn" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};
