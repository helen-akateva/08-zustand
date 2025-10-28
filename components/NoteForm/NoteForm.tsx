"use client";

import { useMutation } from "@tanstack/react-query";
import { createNote } from "../../lib/api";
import type { NoteTag } from "../../types/note";
import css from "./NoteForm.module.css";
import { useRouter } from "next/navigation";

export default function NoteForm() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push("/notes");
    },
  });

  const handleSubmit = (formData: FormData) => {
    const noteData = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      tag: formData.get("tag") as NoteTag,
    };
    mutation.mutate(noteData);
  };

  const handleCancelBtnClick = () => {
    router.push("/notes");
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" className={css.input} />
        <span className={css.error} />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
        />
        <span className={css.error} />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select id="tag" name="tag" className={css.select}>
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
        <span className={css.error} />
      </div>

      <div className={css.actions}>
        <button 
          type="button" 
          className={css.cancelButton} 
          onClick={handleCancelBtnClick}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={css.submitButton}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Creating..." : "Create note"}
        </button>
      </div>
    </form>
  );
}