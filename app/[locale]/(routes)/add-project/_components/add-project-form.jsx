"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { crudSchema } from "@/lib/shared/form/crudSchema";
import { APP_NAME } from "@/lib/config";
import { useTranslation } from "react-i18next";

export function AddProjectForm() {
  const { toast } = useToast();
  const router = useRouter();
  const { t } = useTranslation();

  const form = useForm({
    resolver: zodResolver(crudSchema),
    defaultValues: {
      name: "",
      banner: "",
      description: "",
      firstImage: "",
      secondImage: "",
      thirdImage: "",
      fourthImage: "",
    },
  });

  async function onSubmit(values) {
    try {
      const response = await fetch(`${APP_NAME}/api/projects`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: t("common:add_toast_success"),
          description: t("common:toast_description"),
        });
        router.push("/projects");
        router.refresh();
      } else {
        throw new Error("Failed to create a project");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-16">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Ieškok Komunikacijos" {...field} />
              </FormControl>
              <FormDescription>
                {t("adding:project_name")}{" "}
                <span className="text-red-400">*</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="banner"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>
                {t("adding:project_banner_url")}{" "}
                <span className="text-red-400">*</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={`${t("adding:desc_placeholder")}`}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("adding:project_description")}{" "}
                <span className="text-red-400">*</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="firstImage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>{t("adding:project_link_1")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondImage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>{t("adding:project_link_2")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thirdImage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>{t("adding:project_link_3")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fourthImage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormDescription>{t("adding:project_link_4")}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("adding:add_button")}</Button>
      </form>
    </Form>
  );
}
