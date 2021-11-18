import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ onAction }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Enter event description!</p>"
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            {
              "min-height": "200px",
              color: "rgba(75, 85, 99, 1);",
            },
            editor.editing.view.document.getRoot()
          );
        });
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onAction(data);
        // console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        // console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        // console.log("Focus.", editor);
      }}
    />
  );
};

export default Editor;
