"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(10, {
      message: "password must be at least 10 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
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
                <h1>Log in to Spotify</h1>
              </div>
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
              <div className="text-center ">
                <ButtonTransition
                  variant="outline"
                  type="button"
                  icon={<img src="/Ellipse 3.png" alt="" />}
                  size="icon"
                >
                  Continue with Google
                </ButtonTransition>
              </div>
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
              <div className="w-80 mx-auto flex items-center justify-start space-x-2 text-start">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Remember me</Label>
              </div>

              <div className="text-center">
                <ButtonTransition type="submit">Login</ButtonTransition>
              </div>
              <div className=" w-80 mx-auto text-start flex flex-col items-center pl-2 font-normal">
                <a className="underline text-base" href="/forgot-password">
                  Forgot Password?
                </a>
              </div>
            </form>
          </Form>
          <div className="register py-5 space-y-10">
            <div className="w-80 mx-auto text-start flex items-center pl-2 font-normal space-x-2">
              <Label htmlFor="register">Don't have an account?</Label>
              <a
                id="register"
                className="underline text-base"
                href="/forgot-password"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-sm text-center">
              <p>
                This site is protected by reCAPTCHA and includes the Google
                Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
