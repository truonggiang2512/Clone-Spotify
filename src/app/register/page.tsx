"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonTransition } from "@/components/ui/buttonTransition";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
type Props = {};

const page = (props: Props) => {
  const formSchema = z
    .object({
      username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      password: z.string().min(10, {
        message: "password must be at least 10 characters.",
      }),
      fullName: z.string().max(50, {
        message: "Full Name must be at most 50 characters.",
      }),
      confirmPassword: z.string().max(50, {
        message: "Full Name must be at most 50 characters.",
      }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
          path: ["confirmPassword"],
        });
      }
    });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <div className="bg-black">
        <img src="/Rectangle 12.png" style={{ width: "20%" }} alt="" />
      </div>
      <div className="max-w-screen-md mx-auto px-4 py-5 h-screen">
        <div className="bg-black p-5 h-full divide-y space-y-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="title text-center text-4xl font-bold">
                <h1>Sign up to Spotify</h1>
              </div>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel className="  w-80 pl-1">Full name</FormLabel>
                    <FormControl className="rounded-md h-12 w-80 py-2">
                      <Input
                        placeholder="Full name"
                        {...field}
                        className="mx-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel className="  w-80 pl-1">
                      Email or username
                    </FormLabel>
                    <FormControl className="rounded-md h-12 w-80 py-2">
                      <Input
                        placeholder="Email or username"
                        {...field}
                        className="mx-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel className=" w-80 pl-1">Password</FormLabel>
                    <FormControl className="rounded-md h-12 w-80 py-2">
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                        className="mx-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel className=" w-80 pl-1">
                      Confirm password
                    </FormLabel>
                    <FormControl className="rounded-md h-12 w-80 py-2">
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        {...field}
                        className="mx-auto"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <ButtonTransition type="submit">Login</ButtonTransition>
              </div>
            </form>
          </Form>
          <div className="register py-5 space-y-4">
            <div className="text-center">
              <ButtonTransition
                variant="outline"
                type="button"
                icon={<img src="/Ellipse 1.png" alt="" />}
                size="icon"
              >
                Continue with Google
              </ButtonTransition>
            </div>
            <div className="text-center ">
              <ButtonTransition
                variant="outline"
                type="button"
                size="icon"
                icon={<img src="/Ellipse 2.png" alt="" />}
              >
                Continue with Google
              </ButtonTransition>
            </div>
            <div className="w-80 mx-auto text-start flex items-center pl-2 font-normal space-x-2">
              <Label htmlFor="register">Already have an account? </Label>
              <a
                id="register"
                className="underline text-base"
                href="/forgot-password"
              >
                Log in.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
