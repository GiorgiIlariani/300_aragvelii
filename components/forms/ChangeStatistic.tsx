"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { StatisticValidation } from "@/lib/validations/statistic";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { updatePlayerDetails } from "@/lib/actions/roster.actions";
import { useState } from "react";

const ChangeStatistic = ({ playerId }: { playerId: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof StatisticValidation>>({
    resolver: zodResolver(StatisticValidation),
    defaultValues: {
      match: "",
      kills: "",
      damage: "",
      survivalTime: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof StatisticValidation>) => {
    console.log(values);

    try {
      setIsLoading(true);
      await updatePlayerDetails(playerId, values);
      form.reset();
      router.push(`/roster/${playerId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-start gap-10"
        onSubmit={form.handleSubmit(onSubmit)}>
        {/* match */}
        <FormField
          control={form.control}
          name="match"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                ჩატარებული მატჩი
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* kills */}
        <FormField
          control={form.control}
          name="kills"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                კილები
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* damage */}
        <FormField
          control={form.control}
          name="damage"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                დემეიჯი
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* survivar time */}
        <FormField
          control={form.control}
          name="survivalTime"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="font-normal text-lg text-light-2">
                გატარებული დრო
              </FormLabel>
              <FormControl>
                <Input
                  type="string"
                  className="account-form_input no-focus"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-primary-500 text-light-1 text-xl tracking-wider">
          {isLoading ? "შევსება..." : "შევსება"}
        </Button>
      </form>
    </Form>
  );
};

export default ChangeStatistic;
