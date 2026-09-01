import React, {
  useState
} from 'react';

import AppBreadcrumb from "@/components/common/AppBreadcrumb";

import PageHeader from "@/components/common/PageHeader";

import PersonalInformationSection from './FormComponents/PersonalInformationSection';

import ContactInformationSection from './FormComponents/ContactInformationSection';

import AlumniBackgroundSection  from './FormComponents/AlumniBackgroundSection';

import EducationalBackgroundFields from './FormComponents/AlumniBackgroundFields/EducationalBackgroundFields';

import ProfessionalBackgroundFields from './FormComponents/AlumniBackgroundFields/ProfessionalBackgroundFields';

import { type AlumniEducationalBackground } from '@/app/models/AlumniEducationalBackgroundModel';

import { type AlumniProfessionalBackground } from '@/app/models/AlumniProfessionalBackgroundModel';

import { Button } from '@/components/ui/button';

interface props {
  profileId?: string
}


const AlumniForm  = ({
  profileId
}: props): React.ReactElement => {

  const alumniEducationalBackgroundDefaultData: AlumniEducationalBackground = {
    id: crypto.randomUUID(),
    level: '',
    school_program_id: '',
    from_date: '',
    to_date: '',
    is_graduated: false,
    year_graduated: '',
    school_id: '',
    awards: []
  }

  const alumniProfessionalBackgroundDefaultData: AlumniProfessionalBackground = {
    id: crypto.randomUUID(),
    company_id : "",
    position: "",
    employment_start_date: "",
    employment_end_date: "",
    employment_status: "",
    awards: []
  }

  const [alumniEducBackgroundData, setAlumniEducBackgroundData] = useState<
    AlumniEducationalBackground []
  > ()

  const [alumniProfessionalBackgroundData, setAlumniProfessionalBackgroundData] = useState<
    AlumniProfessionalBackground []
  > ()
    
  return (
    <div className="space-y-6 p-6">
      {profileId ?? ''}
      <AppBreadcrumb
        items={[
          {
            label: "Alumni",
          },
          {
            label: "Form"
          }
        ]}
      />
        
      <PageHeader
        title="Alumni Form"
        description="Fill out alumni data."
      />

      <PersonalInformationSection />

      <ContactInformationSection />

      <AlumniBackgroundSection
        title="Alumni Educational Background"
        defaultData={alumniEducationalBackgroundDefaultData}
        fKey={"educ_background_id"}
        setBackgroundData={setAlumniEducBackgroundData}
      >
        {(
          background, 
          onChange, 
          removeBackground, 
          awardsComponent,
          awardsTrait
        ) => (
          <EducationalBackgroundFields 
            background={background}
            onChange={onChange}
            removeBackground={removeBackground}
            awardsComponent={awardsComponent}
            awardsTrait={awardsTrait}
          />
        )}
      </AlumniBackgroundSection>

      <AlumniBackgroundSection
        title="Alumni Professional Background"
        defaultData={alumniProfessionalBackgroundDefaultData}
        fKey={"educ_background_id"}
        setBackgroundData={setAlumniProfessionalBackgroundData}
      >
        {(
          background, 
          onChange, 
          removeBackground, 
          awardsComponent,
          awardsTrait
        ) => (
          <ProfessionalBackgroundFields 
            background={background}
            onChange={onChange}
            removeBackground={removeBackground}
            awardsComponent={awardsComponent}
            awardsTrait={awardsTrait}
          />
        )}
      </AlumniBackgroundSection>
      <Button onClick={() => console.log(alumniEducBackgroundData, alumniProfessionalBackgroundData)}>Submit</Button>
    </div>  
  )
}

export default AlumniForm;
