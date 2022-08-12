const SelectRoom = ({ setRoom }) => {
  return (
    <>
      <select
        className="roomSelect"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      >
        <option selected disabled value="">
          Select a room
        </option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="React">React</option>
        <option value="SQL">SQL</option>
        <option value="C#">C#</option>
        <option value="Tailwind">Tailwind</option>
        <option value="Drupal">Drupal</option>
        <option value="Strapi">Strapi</option>
        <option value="Django">Django</option>
      </select>
    </>
  );
};

export default SelectRoom;
