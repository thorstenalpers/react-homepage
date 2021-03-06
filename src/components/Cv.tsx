import React, { Fragment } from "react";
import DataGrid, { Column, Sorting } from "devextreme-react/data-grid";
import CvService from "../services/CvService";
import { ICvEntry } from "../services/CvService";
import { Helmet } from "react-helmet";

export default () => {
  const jobEntries = CvService.getJobEntries();
  const educationalEntries = CvService.getEducationalEntries();

  const renderCompany = (data: { value: string }) => {
    let cvEntry: ICvEntry;
    cvEntry =
      jobEntries.find((e) => e.company === data.value) ??
      educationalEntries.find((e) => e.company === data.value);
    return (
      <a
        href={cvEntry.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={cvEntry.company}
      >
        <img
          src={cvEntry.logo}
          alt={cvEntry.company}
          style={{ width: "60px" }}
        />
      </a>
    );
  };
  const createMarkup = (activity: string) => ({ __html: activity });

  const renderActivities = (data: { value: string[] }) => {
    return (
      <ul>
        {data.value.map((activity) => (
          <li dangerouslySetInnerHTML={createMarkup(activity)} />
        ))}
      </ul>
    );
  };

  const renderPosition = (data: { value: string }) => {
    return <span dangerouslySetInnerHTML={createMarkup(data.value)} />;
  };

  return (
    <Fragment>
      <Helmet>
        <meta name="description" content="Lebenslauf von Thorsten Alpers" />
      </Helmet>

      <div className="header">
        <img
          className="img-responsive pull-right"
          src="/images/Foto_TAlpers.jpg"
          alt="Foto"
        />
        <h1>Lebenslauf</h1>
      </div>
      <br />
      <br />
      <h2>Berufliche Tätigkeiten</h2>
      <br />
      <DataGrid
        id="gridContainer"
        dataSource={jobEntries}
        showBorders={true}
        hoverStateEnabled={true}
        columnAutoWidth={true}
      >
        <Sorting mode="none" />
        <Column dataField="date" caption="Datum" width={150} />
        <Column
          dataField="position"
          cellRender={renderPosition}
          caption="Position"
          width={195}
        />
        <Column
          dataField="company"
          cellRender={renderCompany}
          caption="Unternehmen"
          width={95}
        />
        <Column
          dataField="activities"
          cellRender={renderActivities}
          caption="Tätigkeiten"
        />
      </DataGrid>
      <br />
      <h2>Schulische Ausbildung</h2>
      <br />
      <DataGrid
        id="gridContainer"
        dataSource={educationalEntries}
        showBorders={true}
        hoverStateEnabled={true}
        columnAutoWidth={true}
      >
        <Sorting mode="none" />
        <Column dataField="date" caption="Datum" width={150} />
        <Column
          dataField="position"
          cellRender={renderPosition}
          caption="Art"
          width={195}
        />
        <Column
          dataField="company"
          cellRender={renderCompany}
          caption="Schule"
          width={95}
        />
        <Column
          dataField="activities"
          cellRender={renderActivities}
          caption="Tätigkeiten"
        />
      </DataGrid>
      <br />
      <br />
    </Fragment>
  );
};
