import {useState} from 'react';

import AppBreadcrumb from "@/components/common/AppBreadcrumb";

import PageHeader from "@/components/common/PageHeader";

import DataTable from "@/components/common/DataTable";

import { Input } from "@/components/ui/input";

import { YearInput } from '@/components/ui/year-input';

import { Search } from "lucide-react";

import { useDebounce } from '@/hooks/use-debounce';

import { Autocomplete } from '@/components/common/AutoComplete';

import { useSchoolProgramIndex } from '@/hooks/use-school-program';

import {
  useProfileIndex
} from "@/hooks/use-profile"

export default function AlumniMasterlist() {

  const [search, setSearch] = useState<string>("")

  const [courseSearch, setCourseSearch] = useState<string>("");

  const [fromYear, setFromYear] = useState<any>("")

  const [toYear, setToYear] = useState<any>("")

  const [courseId, setCourseId] = useState<any>("");

  const debounce = useDebounce(search, 500)

  const courseDebounce = useDebounce(courseSearch, 500);

  const config = {
    params: {
      fullname: debounce,
      graduated_from: fromYear,
      graduated_to: toYear,
      school_id: "019f5a4c-870f-70be-9317-c75cabbca5bc",
      school_program_id: courseId
    }
  }

  const configCourse = {
    params : {
      school_id: "019f5a4c-870f-70be-9317-c75cabbca5bc",
      name: courseDebounce
    }
  }
  
  const { 
    data, 
    status, 
    isLoading,
    isError
  } = useProfileIndex(null, {}, config)

  const { 
    USPschoolProgramData, 
    //USPstatus, 
    USPisLoading,
    //USPisError
  } = useSchoolProgramIndex(null, {}, configCourse)

  const schoolPrograms =
    USPschoolProgramData?.map((item: any) => ({
        id: item.id,
        label: item.name,
    })) ?? [];

  return (
    <div className="space-y-6 p-6">
      <AppBreadcrumb
        items={[
          {
            label: "Alumni",
          },
          {
            label: "Masterlist",
          },
        ]}
      />

      <PageHeader
        title="Alumni Masterlist"
        description="JB Alumni Masterlist Page."
      />
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          Alumni name
          <Search className="absolute left-3 top-2/3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search alumni..."
            className="pl-9"
            onChange={(e:any) => setSearch(e.target.value)}
          />
        </div>
        <div className="relative flex-1">
          Graduated From Year
          <YearInput 
            year={fromYear}
            setYear={setFromYear}
          />
        </div>
        <div className="relative flex-1">
          Graduated To Year
          <YearInput 
            year={toYear}
            setYear={setToYear}
          />
        </div>
        <div className="relative flex-1">
          Course
          <Autocomplete
            value={courseSearch}
            loading={USPisLoading}
            options={schoolPrograms}
            placeholder="Search Course..."
            onChange={setCourseSearch}
            onSelect={(schoolProgram) => {
                setCourseId(schoolProgram.id)
                setCourseSearch(schoolProgram.label);
            }}
            onClear={()=>{
              setCourseId("")
            }}
          />
        </div>
      </div>
      
      <DataTable<any>
        data={(status !== 'pending' && !isError) ? data : []}
        isLoading={isLoading}
        columns={[
          { accessorKey: 'firstname', header: 'Firstname' }, 
          { accessorKey: 'lastname', header: 'Lastname' }, 
          { accessorKey: 'year_graduated', header: 'Year' }, 
          { accessorKey: 'course_program', header: 'Course' },  
          { accessorKey: 'current_company.company.name', header: 'Current Company' },
          { accessorKey: 'current_company.position', header: 'Current Company' },
        ]}
      />
    </div>
  );
}