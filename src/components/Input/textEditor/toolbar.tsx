// import '@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap");';
// import '@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&display=swap");';
// import '@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Myeongjo&family=Nanum+Pen+Script&display=swap");'

export const fontSize = ["16px", "18px", "20px", "22px"];

export const QuillToolbar = () => (
  <>
    <div id="toolbar">
      <span className="ql-formats">
        <select className="ql-size">
          {fontSize.map((val, index) => (
            <option key={index} value={val} defaultValue={"16px"}>
              {val.replace(/[^0-9]/g, "")} px
            </option>
          ))}
        </select>
      </span>
      <span className="ql-formats">
        <select className="ql-color" />
      </span>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-underline" />
      </span>
    </div>
  </>
);
export default QuillToolbar;
