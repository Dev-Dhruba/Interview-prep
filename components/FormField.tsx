import React from 'react'
import {FormControl, FormDescription, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email';
}

const FormField = <T extends FieldValues>({ control, name, label, placeholder, type = "text" }: FormFieldProps<T>) => (
<Controller render={({ field }) => (
    <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
            <Input placeholder={placeholder} className='input' type={type} {...field} />
        </FormControl>
        <FormMessage />
    </FormItem>
)} name={name} control={control} />)


export default FormField
