import React, {
    useState,
    useEffect
} from 'react';

import { 
    Card, 
    CardContent, 
    CardHeader, 
    CardTitle,
    //CardFooter
} from "@/components/ui/card";

import { type AlumniEducationalBackground } from '@/app/models/AlumniEducationalBackgroundModel';

import { type AlumniProfessionalBackground } from '@/app/models/AlumniProfessionalBackgroundModel';

import { Button } from '@/components/ui/button';

import { Plus } from "lucide-react";

import AlumniAwardsFields from './AlumniBackgroundFields/AlumniAwardsFields';

interface AlumniBackgroundSectionProps <T> {
    title: String,
    defaultData: T,
    fKey: string,
    setBackgroundData: any,
    children: (
        background: T,
        onChange: (i: string, field: keyof T, value: any) => void,
        removeBackground: (i: string) => void,
        awardsComponent: React.ReactElement,
        awardsTrait: (
            i: string, 
            action: string, 
            awardId?: string,
            field?: string,
            value?: any
        ) => void
    ) => React.ReactNode
}

const AlumniBackgroundSection = <T extends 
    AlumniEducationalBackground | 
    AlumniProfessionalBackground
> ({
    title,
    defaultData,
    fKey,
    setBackgroundData,
    children
}:AlumniBackgroundSectionProps <T>): React.ReactElement => {
    const [background, setBackgroundInfo] = useState<T []>([defaultData])

    const addNewBackground = () => {
        setBackgroundInfo((prev: any ) => [...prev, {...defaultData, id:crypto.randomUUID()}])
    }

    const onChange = (
        i: string, 
        field: keyof T, 
        value: any
    ) => {
        setBackgroundInfo(
            (prev: any) => (
                prev.map((_: T) => _.id === i ? {
                    ..._, [field] : value
                } : _)
            )
        );
    }

    const removeBackground = (i: string) => {
        setBackgroundInfo((prev: any) => prev.filter((_: any) => _.id !== i))
    }

    const awardsTrait = (
        i: string, 
        action: string, 
        awardId:string = "",
        field:string = "",
        value:any = ""
    ) => {
        let actions: any = {
            'add': () =>  setBackgroundInfo(
                (prev: T[]) => prev.map (
                    (background: T) => (
                        background.id === i ? {
                            ...background,
                            awards: [   
                                ...background.awards,
                                {
                                    id: crypto.randomUUID(),
                                    [fKey] : background.id
                                }
                            ]
                        } : background
                    )
                )
            ),
            'remove': () => setBackgroundInfo(
                (prev: T[]) => prev.map (
                    (background: T) => (
                        background.id === i ? {
                            ...background,
                            awards: background.awards.filter((_:any) => _.id !== awardId)    
                        } : background
                    )
                )
            ),
            'onchange': () => setBackgroundInfo(
                (prev: T[]) => prev.map (
                    (background: T) => (
                        background.id === i ? {
                            ...background,
                            awards: background.awards.map(
                                (_:any) => _.id === awardId ? {
                                    ..._, [field]: value
                                } : _
                            )
                        } : background
                    )
                )
            ),
        }
        actions[action]()
    }

    useEffect(() => {
        setBackgroundData(background)
    }, [background])

    return (
        <Card>  
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    {title}
                </CardTitle>

                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => addNewBackground()}
                >
                   Add {title} Info <Plus className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                {background?.map((b: T) => (
                   <React.Fragment key={b.id}>
                        {children(
                            b,
                            (i, field, value) => onChange(i, field, value),
                            (i) => removeBackground(i),
                            (<React.Fragment>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <CardTitle className="text-base">
                                        Awards
                                    </CardTitle>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            onClick={()=>awardsTrait(b?.id, 'add')}
                                        >
                                            Add Award <Plus className="h-4 w-4 mr-1" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                {b?.awards?.map((award: any) => (
                                    <AlumniAwardsFields
                                        key={award.id}
                                        award={award}
                                        background={b}
                                        removeAward={()=>{awardsTrait(b.id, 'remove', award.id)}}
                                        awardsTrait={awardsTrait}
                                    />
                                ))}
                            </React.Fragment>),
                            awardsTrait
                        )}
                   </React.Fragment>
                ))}
            </CardContent>
        </Card>
    )
}

export default AlumniBackgroundSection;