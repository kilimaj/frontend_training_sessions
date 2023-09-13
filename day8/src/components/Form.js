import React, { useState, useEffect, useRef } from "react";
const Form = () => {};

const Text = ({ id, data, ...rest }) => {
  const [value, setValue] = useState("");
  //   console.log("render...");
  useEffect(() => {
    data[id] = value;
  }, [value]);
  return (
    <input
      type="text"
      id={id}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
    />
  );
};

const Password = ({ id, data, ...rest }) => {
  const [value, setValue] = useState("");
  //   console.log("render...");
  useEffect(() => {
    data[id] = value;
  }, [value]);
  return (
    <input
      type="password"
      id={id}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
    />
  );
};
const Textarea = ({ id, data, ...rest }) => {
  const [value, setValue] = useState("");
  //   console.log("render...");
  useEffect(() => {
    data[id] = value;
  }, [value]);
  return (
    <textarea
      id={id}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
    ></textarea>
  );
};

const Select = ({ id, options, data, ...rest }) => {
  const [value, setValue] = useState("");
  //   console.log("render...");
  useEffect(() => {
    data[id] = value;
  }, [value]);
  return (
    <select
      id={id}
      value={value}
      onChange={({ target }) => {
        setValue(target.value);
      }}
    >
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );
};

const Radio = ({ id, data, options, ...rest }) => {
  const [value, setValue] = useState("");
  console.log("render...");
  useEffect(() => {
    // console.log(value);
    data[id] = value;
  }, [value]);

  return (
    <>
      {options.map((item) => {
        return (
          <label key={item.value}>
            <input
              name={id}
              type="radio"
              value={item.value}
              onChange={({ target }) => {
                setValue(target.value);
              }}
            />
            {item.label}
          </label>
        );
      })}
    </>
  );
};

const Check = ({ id, data, options, ...rest }) => {
  const [value, setValue] = useState([]);
  const ref = useRef(null);
  console.log("render...");
  useEffect(() => {
    // console.log(value);
    data[id] = value;
  }, [value]);

  return (
    <div ref={ref}>
      {options.map((item) => {
        return (
          <label key={item.value}>
            <input
              name={id}
              type="checkbox"
              value={item.value}
              onChange={({ target }) => {
                let temp = [];
                let check = ref.current.querySelectorAll("input:checked");
                check.forEach((item) => {
                  temp.push(item.value);
                });
                setValue(temp);
              }}
            />
            {item.label}
          </label>
        );
      })}
    </div>
  );
};

Form.Text = Text;
Form.Password = Password;
Form.Textarea = Textarea;
Form.Select = Select;
Form.Radio = Radio;
Form.Check = Check;
export default Form;
