import { Controller } from "react-hook-form";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = ({ control, inputName }) => {
  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, onBlur, value } }) => (
        <CKEditor
          editor={ClassicEditor}
          data={value}
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
            onChange(data);
          }}
          onBlur={(event, editor) => {
            onBlur(editor);
          }}
        />
      )}
    />
  );
};

export default Editor;
