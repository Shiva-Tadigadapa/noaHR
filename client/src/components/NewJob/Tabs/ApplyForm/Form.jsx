import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import FieldControl from "./FieldControl";
import CustomQuestion from "./CustomQuestion";

const Form = ({ handleTabClick }) => {
  const [fields, setFields] = useState({
    name: { value: "required" },
    email: { value: "required" },
    phone: { value: "optional" },
    address: { value: "optional" },
    resume: { value: "required" },
    linkedin: { value: "optional" },
    noticePeriod: { value: "optional" },
    workExperience: { value: "optional" },
  });

  const [customQuestions, setCustomQuestions] = useState([]);

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: { value },
    });
  };

  const handleAddCustomQuestion = () => {
    setCustomQuestions([...customQuestions, { question: "", type: "text", options: [], required: false }]);
  };

  const handleCustomQuestionChange = (index, value) => {
    const newQuestions = [...customQuestions];
    newQuestions[index].question = value;
    setCustomQuestions(newQuestions);
  };

  const handleCustomQuestionTypeChange = (index, type) => {
    const newQuestions = [...customQuestions];
    newQuestions[index].type = type;
    newQuestions[index].options = type === "multipleChoice" ? [""] : [];
    setCustomQuestions(newQuestions);
  };

  const handleCustomQuestionRequiredChange = (index) => {
    const newQuestions = [...customQuestions];
    newQuestions[index].required = !newQuestions[index].required;
    setCustomQuestions(newQuestions);
  };

  const handleAddOption = (index) => {
    const newQuestions = [...customQuestions];
    newQuestions[index].options.push("");
    setCustomQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const newQuestions = [...customQuestions];
    newQuestions[questionIndex].options[optionIndex] = value;
    setCustomQuestions(newQuestions);
  };

  const handleRemoveOption = (questionIndex, optionIndex) => {
    const newQuestions = [...customQuestions];
    newQuestions[questionIndex].options = newQuestions[questionIndex].options.filter((_, i) => i !== optionIndex);
    setCustomQuestions(newQuestions);
  };

  const handleRemoveCustomQuestion = (index) => {
    const newQuestions = customQuestions.filter((_, i) => i !== index);
    setCustomQuestions(newQuestions);
  };

  return (
    <div className="space-y-6 flex flex-col w-full items-start">
      <h2 className="text-xl w-full font-bold">Application Form</h2>
      <p className="p-2 px-5 border rounded-lg border-black/50 bg-zinc-500/10">
        Here's where you can edit which fields appear on this job's application
        form and if they are required, optional, or off. Customize the
        application form using the toggle buttons below.
      </p>
      <div className="w-full space-y-2.5">
        {Object.keys(fields).map((field) => (
          <FieldControl
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            value={fields[field].value}
            onChangeRequired={() => handleChange(field, "required")}
            onChangeOptional={() => handleChange(field, "optional")}
            onChangeOff={() => handleChange(field, "off")}
          />
        ))}
      </div>
      <div className="w-full space-y-2">
        {customQuestions.map((q, index) => (
          <CustomQuestion
            key={index}
            question={q.question}
            type={q.type}
            options={q.options}
            required={q.required}
            onChangeQuestion={(value) => handleCustomQuestionChange(index, value)}
            onChangeType={(type) => handleCustomQuestionTypeChange(index, type)}
            onAddOption={() => handleAddOption(index)}
            onChangeOption={(optionIndex, value) => handleOptionChange(index, optionIndex, value)}
            onRemoveOption={(optionIndex) => handleRemoveOption(index, optionIndex)}
            onChangeRequired={() => handleCustomQuestionRequiredChange(index)}
            onRemove={() => handleRemoveCustomQuestion(index)}
          />
        ))}
        <button onClick={handleAddCustomQuestion} className="flex items-center justify-center gap-2 w-1/2 py-2 px-4 border rounded-lg bg-slate-700 hover:bg-slate-900 transition-all text-white">
          <IoMdAdd className="text-2xl" />
          Add Custom Question
        </button>
      </div>
      <div className="w-full mt-10">
        <button
          onClick={() => handleTabClick("Finish")}
          className="bg-gray-900/90 px-10 py-2 tracking-wider hover:bg-gray-950 text-white rounded-lg float-right">
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
