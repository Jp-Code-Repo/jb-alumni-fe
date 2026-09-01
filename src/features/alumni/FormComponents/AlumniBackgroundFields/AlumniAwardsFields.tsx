import React, {} from 'react'

import { type Awards } from '@/app/models/AwardsModel'

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
    //FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";

import { Textarea } from '@/components/ui/textarea';

import { Button } from '@/components/ui/button';

import { X } from "lucide-react";

interface AlumniAwardsFieldsProps <T> {
    award: T
    removeAward: any,
    awardsTrait: any,
    background: any
}

const AlumniAwardsFields = <T extends Awards> ({
    award,
    removeAward,
    awardsTrait,
    background
}: AlumniAwardsFieldsProps<T>): React.ReactElement => {
    return (
        <Card className='w-[100%] mt-5'>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    {award?.award_name}
                </CardTitle>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeAward()}
                >
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <FieldGroup className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Field className='col-span-3'>
                        <FieldLabel>Award Name</FieldLabel>
                        <FieldContent>
                            <Input 
                                value={award?.award_name} 
                                onChange={
                                    (e:any) => {
                                        awardsTrait(
                                            background?.id,
                                            'onchange',
                                            award?.id,
                                            'award_name',
                                            e.target.value
                                        )
                                    }
                                } 
                            />
                        </FieldContent>
                    </Field>
                    <Field className='col-span-2'>
                        <FieldLabel>Awarded At</FieldLabel>
                        <FieldContent>
                            <Input 
                                value={award?.awarded_at} 
                                type='date'
                                onChange={
                                    (e:any) => {
                                        awardsTrait(
                                            background?.id,
                                            'onchange',
                                            award?.id,
                                            'awarded_at',
                                            e.target.value
                                        )
                                    }
                                } 
                            />
                        </FieldContent>
                    </Field>
                </FieldGroup>
                <FieldGroup className='mt-5'>
                    <Field>
                        <FieldLabel>Description</FieldLabel>
                        <FieldContent>
                            <Textarea 
                                value={award?.description}
                                onChange={
                                    (e:any) => {
                                        awardsTrait(
                                            background?.id,
                                            'onchange',
                                            award?.id,
                                            'description',
                                            e.target.value
                                        )
                                    }
                                } 
                            />
                        </FieldContent>
                    </Field>
                </FieldGroup>
            </CardContent>
        </Card>
    )
}

export default AlumniAwardsFields