import { zodResolver } from "@hookform/resolvers/zod";
import { toArray } from "lodash";
import type { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contentWriteSchema = z.object({
  thumbnail: z
    .object({
      fileId: z.string(),
      fileName: z.string(),
      url: z.string(),
    })
    .optional(),
  pageNumber: z.number().min(0),
  sentence: z.string().max(500).optional(),
  memo: z.string().max(200).optional(),
});

export function useContentWrite() {
  const form = useForm<z.infer<typeof contentWriteSchema>>({
    resolver: zodResolver(contentWriteSchema),
    defaultValues: {
      pageNumber: 0,
      sentence: "",
      memo: "",
    },
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = toArray(e.target.files);
    const file = files[0] as File;

    if (!["jpg", "jpeg", "png"].includes(file.type.split("/")[1])) {
      // TODO: error toast
      return;
    }

    // TODO: upload file

    form.setValue("thumbnail", {
      fileId: "",
      fileName: "",
      url: "",
    });
  }

  return {
    form,
    handleChange,
  };
}
