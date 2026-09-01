import React, {
    useState
} from 'react'

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
import { Button } from '@/components/ui/button';
/*import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";*/

import { X } from "lucide-react";
// import { Plus } from "lucide-react";

import { Input } from "@/components/ui/input";

import { useDebounce } from '@/hooks/use-debounce';

import { Autocomplete } from '@/components/common/AutoComplete';
import { useSchoolIndex } from '@/hooks/use-school';
import { useSchoolProgramIndex } from '@/hooks/use-school-program';

import { type AlumniEducationalBackground } from '@/app/models/AlumniEducationalBackgroundModel';

interface EducationalBackgroundFieldsProps <T> {
    background: T;
    onChange: (i: string, field: keyof T, value: any) => void;
    removeBackground: (i: string) => void,
    awardsComponent: React.ReactElement,
    awardsTrait: (i: string, action: string, awardId?:string) => void
}

const EducationalBackgroundFields = ({
    background,
    onChange,
    removeBackground,
    awardsComponent,
    // awardsTrait
}: EducationalBackgroundFieldsProps<AlumniEducationalBackground>): React.ReactElement => {

    const [searchSchool, setSearchSchool] = useState<any>("");

    const [searchSchoolProgram, setSearchSchoolProgram] = useState<any>("");

    const schoolSearchDebounce = useDebounce(searchSchool, 500);

    const schoolProgramSearchDebounce = useDebounce(searchSchoolProgram, 500);

    const configSchoolSearch = {
        params : {
            name: schoolSearchDebounce
        }
    }

    const configSchoolProgramSearch = {
        params: {
            name: schoolProgramSearchDebounce,
            school_id: background.school_id,
        }
    }

    const {
        SchoolData,
        //SchoolDataStatus,
        SchoolDataIsLoading,
        //SchoolDataIsError
    } = useSchoolIndex(null, {}, configSchoolSearch)

    const {
        USPschoolProgramData,
        USPisLoading
    } = useSchoolProgramIndex(null, {}, configSchoolProgramSearch)



    const schools =
        SchoolData?.map((item: any) => ({
            id: item.id,
            label: item.name,
    })) ?? [];

    const schoolProgram =
        USPschoolProgramData?.map((item: any) => ({
            id: item.id,
            label: item.name,
    })) ?? [];
    
    return (
         <Card key={background?.id} className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    School Info
                </CardTitle>

                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeBackground(background.id)}
                >
                    <X className="h-4 w-4" />
                </Button>
            </CardHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <Card>
                    <CardContent className="pt-5">
                        <FieldGroup className='pb-5'>
                            <Field data-invalid={false}>
                                <FieldLabel>School</FieldLabel>
                                <FieldContent>
                                    <Autocomplete
                                        value={searchSchool}
                                        loading={SchoolDataIsLoading}
                                        options={schools}
                                        placeholder="Search School..."
                                        onChange={setSearchSchool}
                                        onSelect={(school) => {
                                            //setCourseId(schoolProgram.id)
                                            onChange(background.id, "school_id", school?.id)
                                            setSearchSchool(school.label);
                                        }}
                                        onClear={()=>{
                                           onChange(background.id, "school_id", null)
                                           setSearchSchool("");
                                        }}
                                    />
                                </FieldContent>
                                <FieldError
                                    errors={[
                                        {
                                            message: ""
                                        },
                                    ]}
                                />
                            </Field>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <Field data-invalid={false} className="col-span-3">
                                    <FieldLabel>Course / Program</FieldLabel>
                                    <FieldContent>
                                         <Autocomplete
                                            value={searchSchoolProgram}
                                            loading={USPisLoading}
                                            options={schoolProgram}
                                            placeholder="Search School Program..."
                                            onChange={setSearchSchoolProgram}
                                            onSelect={(schoolProgram) => {
                                                //setCourseId(schoolProgram.id)
                                                onChange(background.id, "school_program_id", schoolProgram?.id)
                                                setSearchSchoolProgram(schoolProgram.label);
                                            }}
                                            onClear={()=>{
                                                //setCourseId("")
                                            }}
                                        />
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                                <Field data-invalid={false}>
                                    <FieldLabel>Level</FieldLabel>
                                    <FieldContent>
                                        <Input />
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field data-invalid={false}>
                                    <FieldLabel>From Year</FieldLabel>
                                    <FieldContent>
                                        <Input />
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                                <Field data-invalid={false}>
                                    <FieldLabel>To Year</FieldLabel>
                                    <FieldContent>
                                        <Input />
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <Field data-invalid={false}>
                                    <FieldLabel>Is Graduated</FieldLabel>
                                    <FieldContent>
                                        <Input type='checkbox'/>
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                                <Field data-invalid={false} className="col-span-3">
                                     <FieldLabel>Year Graduated</FieldLabel>
                                    <FieldContent>
                                        <Input />
                                    </FieldContent>
                                    <FieldError
                                        errors={[
                                            {
                                                message: ""
                                            },
                                        ]}
                                    />
                                </Field>
                            </div>
                        </FieldGroup>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        {awardsComponent}
                    </CardContent>
                </Card>
            </div>
         </Card>
    )
}

export default EducationalBackgroundFields;