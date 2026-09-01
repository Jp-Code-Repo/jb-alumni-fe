import React, {useState} from 'react';
//import { Controller, useForm } from "react-hook-form";
import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    //CardFooter
} from "@/components/ui/card";
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
import { Button } from '@/components/ui/button';

import { Plus } from "lucide-react";

interface ContactInformation {
    id: string,
    type: string,
    value: string,
    platform?: string
}

const ContactInformationSection: React.FC = <T = ContactInformation> ({

}: T): React.ReactElement =>
{
    const [
        contactInformation,
        setContactInformation
    ] = useState<T []>([])

    const addNewContact = () => {
        setContactInformation((value: any) => [...value, {
            id: crypto.randomUUID(),
            type: '',
            value: '',
            platform: '',
        }])
    }

    const removeContact = (i: string) => {
        setContactInformation((value: any) => value.filter((_: any, /*index: number*/) => _.id !== i))
    }

    const onChangeContactValues = (value: any, id: any, field: any) => {  
        setContactInformation((prev: any) => 
            prev.map((contact: ContactInformation) => {
                return contact?.id === id ? {
                    ...contact, [field]: value
                } : contact
            })
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    Alumni Contact Information
                </CardTitle>

                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => addNewContact()}
                >
                   Add Alumni Contact Info <Plus className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                {contactInformation.map((contact: any) => (
                <Card key={contact.id} className="mb-4">
                    <CardContent>
                        <FieldGroup className="grid gap-6 md:grid-cols-[2fr_2fr_2fr_1fr]">
                            <Field data-invalid={false}>
                                <FieldLabel>Contact Type</FieldLabel>
                                <FieldContent>
                                    <Select
                                        value={contact?.type}
                                        onValueChange={(e:any) => onChangeContactValues(e, contact?.id, 'type')}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Contact Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="email">Email</SelectItem>
                                            <SelectItem value="mobile">Mobile</SelectItem>
                                            <SelectItem value="telephone">Telephone</SelectItem>
                                            <SelectItem value="social_link">Social Link</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FieldContent>
                                <FieldError
                                     errors={[
                                        {
                                            message: ""
                                        }
                                     ]}
                                />
                            </Field>
                            <Field data-invalid={[]}>
                                <FieldLabel>Value</FieldLabel>
                                <FieldContent>
                                    <Input 
                                        type='text' 
                                        value={contact?.value} 
                                        onChange={(e:any) => onChangeContactValues(e.target.value, contact?.id, 'value')}
                                    />
                                </FieldContent>
                            </Field>
                            <Field data-invalid={[]}>
                                <FieldLabel>Platform</FieldLabel>
                                <FieldContent>
                                    <Select
                                        value={contact?.platform}
                                        onValueChange={(e:any) => onChangeContactValues(e, contact?.id, 'platform')}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select Contact Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            
                                            <SelectItem value="">N/A</SelectItem>
                                            <SelectItem value="fb">Facebook</SelectItem>
                                            <SelectItem value="instagram">Instagram</SelectItem>
                                            <SelectItem value="tiktok">Tiktok</SelectItem>
                                            <SelectItem value="x">x</SelectItem>
                                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FieldContent>
                            </Field>
                            <Field>
                                <FieldLabel>Actions</FieldLabel>
                                <FieldContent>
                                    <Button onClick={() => removeContact(contact?.id)}>Remove Contact</Button>
                                </FieldContent>       
                            </Field>
                        </FieldGroup>
                    </CardContent>
                </Card>
                ))}
            </CardContent>
        </Card>
    )
}

export default ContactInformationSection;
