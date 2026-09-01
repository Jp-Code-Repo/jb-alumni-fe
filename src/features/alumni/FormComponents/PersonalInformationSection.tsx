import { Camera, Upload } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PersonalInformation = {
    profile_image: File | null;
    first_name: string;
    middle_name: string;
    last_name: string;
    suffix: string;
    student_number: string;
    preferred_name: string;
};

export default function PersonalInformationSection() {
    const form = useForm<PersonalInformation>({
        defaultValues: {
            profile_image: null,
            first_name: "",
            middle_name: "",
            last_name: "",
            suffix: "",
            student_number: "",
            preferred_name: "",
        },
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Alumni Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                    {/* Left */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-xl border bg-muted">
                                <Camera className="h-14 w-14 text-muted-foreground" />
                            </div>

                            <Controller
                                control={form.control}
                                name="profile_image"
                                render={({ field }) => (
                                    <>
                                        <input
                                            id="profile-image"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) =>
                                                field.onChange(
                                                    e.target.files?.[0] ?? null
                                                )
                                            }
                                        />

                                        <Button
                                            type="button"
                                            className="absolute bottom-3 left-1/2 -translate-x-1/2"
                                            size="sm"
                                            asChild
                                        >
                                            <label
                                                htmlFor="profile-image"
                                                className="cursor-pointer"
                                            >
                                                <Upload className="mr-2 h-4 w-4" />
                                                Upload
                                            </label>
                                        </Button>
                                    </>
                                )}
                            />
                        </div>

                        <p className="mt-3 text-center text-sm text-muted-foreground">
                            JPG, PNG or WEBP
                            <br />
                            Max 2 MB
                        </p>
                    </div>

                    {/* Right */}
                    <FieldGroup className="grid gap-6 md:grid-cols-2">
                        <Controller
                            control={form.control}
                            name="first_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>First Name</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            placeholder="Juan"
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="last_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Last Name</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            placeholder="Dela Cruz"
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="middle_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Middle Name</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            placeholder="Santos"
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="suffix"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Suffix</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            placeholder="Jr."
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="student_number"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Student Number</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            placeholder="2023-000123"
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="preferred_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Birthday</FieldLabel>
                                    <FieldContent>
                                        <Input
                                            type="date"
                                            {...field}
                                        />
                                        <FieldError
                                            errors={[fieldState.error]}
                                        />
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="preferred_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Gender</FieldLabel>
                                    <FieldContent>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select gender" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FieldContent>
                                </Field>
                            )}
                        />

                        <Controller
                            control={form.control}
                            name="preferred_name"
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel>Blood Type</FieldLabel>
                                    <FieldContent>
                                        <Select
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select Blood Type" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="male">O</SelectItem>
                                                <SelectItem value="female">O+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FieldContent>
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </div>
            </CardContent>
        </Card>
    );
}