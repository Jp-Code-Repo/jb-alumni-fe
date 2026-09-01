import React, {} from 'react';

import AppBreadcrumb from "@/components/common/AppBreadcrumb";

import PageHeader from "@/components/common/PageHeader";

const AlumniReports  = (): React.ReactElement => {
  return (
    <div className="space-y-6 p-6">
      <AppBreadcrumb
        items={[
          {
            label: "Alumni",
          },
          {   
            label: "Reports",
          },
        ]}
      />
        
      <PageHeader
        title="Alumni Masterlist"
        description="JB Alumni Masterlist Page."
      />
    </div>  
  )
}

export default AlumniReports;
