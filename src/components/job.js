import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from 'react-intl';


const Job = (props) => {
  const renderSlary = () => {
    if (window.navigator.language === 'es-ES') {
      if (props.offer.salary === 1) return props.offer.salary + " millón";
      else return props.offer.salary + " millones";
    }
    else {
      if (props.offer.salary === 1) return props.offer.salary + " million";
      else return props.offer.salary + " millions";
    }

  };


  return (
    <tr>
      <th scope="row">
        <FormattedMessage
          id="job.id"
          defaultMessage={props.offer.id}
          description="Job id"
        />
      </th>
      <td>
        <FormattedMessage
          id="job.id"
          defaultMessage={props.offer.name}
          description="Job id"
        />
      </td>
      <td>
        <FormattedMessage
          id="job.id"
          defaultMessage={props.offer.company}
          description="Job id"
        />
      </td>
      <td>
        {renderSlary()}

      </td>
      <td><FormattedMessage
        id="job.id"
        defaultMessage={props.offer.city}
        description="Job id"
      /></td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={new Number(props.offer.views)}
          locale="en-US"
          maximumFractionDigits={3}
          minimumFractionDigits={0}
          minimumIntegerDigits={1}
          notation="standard"
          numberingSystem="latn"
          signDisplay="auto"
          style="decimal"
          useGrouping="always"
        />
      </td>
    </tr>
  );
};

export default Job;
