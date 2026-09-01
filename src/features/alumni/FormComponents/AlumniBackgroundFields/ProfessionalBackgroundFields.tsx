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

import { type AlumniProfessionalBackground } from '@/app/models/AlumniProfessionalBackgroundModel'

import { X } from "lucide-react";

import { Button } from '@/components/ui/button';

import {
    Field,
    FieldContent,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";

/*import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";*/

import { Input } from "@/components/ui/input";

import { Autocomplete } from '@/components/common/AutoComplete';

import { useCompanyIndex } from '@/hooks/use-company';

import { useDebounce } from '@/hooks/use-debounce';

interface ProfessionalBackgroundProps <T> {
    background: T;
    onChange: (i: string, field: keyof T, value: any) => void;
    removeBackground: (i: string) => void,
    awardsComponent: React.ReactElement,
    awardsTrait: (i: string, action: string, awardId?:string) => void
}

const ProfessionalBackgroundFields = ({
    background,
    onChange,
    removeBackground,
    awardsComponent,
    //awardsTrait,
}: ProfessionalBackgroundProps<AlumniProfessionalBackground>): React.ReactElement => {

    const [searchCompany, setSearchCompany] = useState<any>("");

    const companyDebounceValue = useDebounce(searchCompany, 500);

    const { 
        CompanyData, 
        //CompanyDataStatus, 
        CompanyDataIsLoading,
        //CompanyDataIsError
    } = useCompanyIndex(null, {}, {
        params: {
            name: companyDebounceValue
        }
    })

    const autoCompleteCompanyData =
        CompanyData?.map((item: any) => ({
            id: item.id,
            label: item.name,
    })) ?? [];

    return (
        <Card key={background?.id} className="mb-4">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">
                    Company Info
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
                                <FieldLabel>Company</FieldLabel>
                                <FieldContent>
                                    <Autocomplete
                                        value={searchCompany}
                                        loading={CompanyDataIsLoading}
                                        options={autoCompleteCompanyData}
                                        placeholder="Search Company..."
                                        onChange={setSearchCompany}
                                        onSelect={(company) => {
                                            onChange(background.id, "company_id", company?.id)
                                            setSearchCompany(company.label);
                                        }}
                                        onClear={()=>{
                                           onChange(background.id, "company_id", null)
                                           setSearchCompany("");
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field data-invalid={false}>
                                    <FieldLabel>Position</FieldLabel>
                                    <FieldContent>
                                        <Input onChange={(e:any) => onChange(background.id, 'position', e.target.value)}/>
                                    </FieldContent>
                                </Field>
                                <Field data-invalid={false}>
                                    <FieldLabel>Employment Status</FieldLabel>
                                    <FieldContent>
                                        <Input onChange={(e:any) => onChange(background.id, 'employment_status', e.target.value)}/>
                                    </FieldContent>
                                </Field>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field data-invalid={false}>
                                    <FieldLabel>From</FieldLabel>
                                    <FieldContent>
                                        <Input type='date' onChange={(e:any) => onChange(background.id, 'employment_start_date', e.target.value)}/>
                                    </FieldContent>
                                </Field>
                                <Field data-invalid={false}>
                                    <FieldLabel>To</FieldLabel>
                                    <FieldContent>
                                        <Input type='date' onChange={(e:any) => onChange(background.id, 'employment_end_date', e.target.value)}/>
                                    </FieldContent>
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

export default ProfessionalBackgroundFields