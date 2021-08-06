import React from "react";

const Form = ({ handleSubmit, guess, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <input
          type="text"
          name="country"
          className="border-solid border-2 mr-2 px-3"
          value={guess}
          onChange={(e) => handleChange(e)}
          placeholder="Which country am I?"
        />
        <input
          type="submit"
          value="Submit"
          className="w-min px-2 py-1 self-center rounded-sm mt-3"
        />
      </div>
    </form>
  );
};

export default Form;
