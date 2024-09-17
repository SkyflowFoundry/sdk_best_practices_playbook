/*
	Copyright (c) 2022 Skyflow, Inc.
*/
import React from 'react';
import {
  CardNumberElement,
  CVVElement,
  ExpirationMonthElement,
  ExpirationYearElement,
  PinElement,
  ExpirationDateElement,
  useCollectContainer,
  useMakeSkyflowStyles,
  InputFieldElement,
  FileInputElement,
} from 'skyflow-react-js';

const CollectElements = () => {
  const container = useCollectContainer();

  const handleCollect = () => {
    const response = container.collect();
    response
      .then((res: unknown) => {
        console.log(JSON.stringify(res));
      })
      .catch((e: unknown) => {
        console.log(e);
      });
  };

  const options = {
    allowedFileType: ["<allowedFileType1>","<allowedFileType2>"]
  };
  
  const handleFile = () => {
    const response = container.uploadFiles({});
    response
      .then((res: unknown) => {
        console.log(JSON.stringify(res));
      })
      .catch((e: unknown) => {
        console.log(e);
      });
  };

  const useStyles = useMakeSkyflowStyles({
    inputStyles: {
      base: {
        border: '1px solid black',
        borderRadius: '4px',
        color: '#1d1d1d',
        padding: '10px 16px',
        fontFamily: '"Roboto", sans-serif'
      },
      complete: {
        color: '#4caf50',
      },
      empty: {},
      focus: {},
      invalid: {
        color: '#f44336',
      },
      global: {
        '@import' :'url("https://fonts.googleapis.com/css2?family=Roboto&display=swap")',
      }
    },
    labelStyles: {
      base: {
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: '"Roboto", sans-serif'
      },
      global: {
        '@import' :'url("https://fonts.googleapis.com/css2?family=Roboto&display=swap")',
      },
      requiredAsterisk:{
        color: 'red'
      }
    },
    errorTextStyles: {
      base: {
        color: 'red',
        fontFamily: '"Roboto", sans-serif'
      },
      global: {
        '@import' :'url("https://fonts.googleapis.com/css2?family=Roboto&display=swap")',
      },
    },
  });

  const classes = useStyles();
  const tableName = "replace-your-table-name";

  return (
    <div className='CollectElements' style={{width: '300px'}}>
      <CardNumberElement
        id={'collectCardNumber'}
        container={container}
        table={tableName}
        classes={classes}
        column={'card_number'}
        label={'Collect Card Number'}
      />

      <CVVElement
        id='cvv'
        container={container}
        table={tableName}
        classes={classes}
        column={'cvv'}
        label='Collect CVV'
      />

      <ExpirationMonthElement
        id='month'
        container={container}
        classes={classes}
        table={tableName}
        column={'exp_month'}
        label='Collect Exp Month'
        placeholder='MM'
      />

      <ExpirationYearElement
        id='year'
        container={container}
        classes={classes}
        table={tableName}
        column={'exp_year'}
        label='Collect Exp Year'
        placeholder='YY'
      />

      <ExpirationDateElement
        id='date'
        container={container}
        classes={classes}
        table={tableName}
        column={'card_expiration'}
        label={'Expiration Date'}
      />

      <PinElement
        id='pin'
        container={container}
        classes={classes}
        table={tableName}
        column={'card_pin'}
        label={'Pin'}
      />
      
      <InputFieldElement
        id='input'
        container={container}
        classes={classes}
        table={tableName}
        column={'ssn'}
        label={'SSN'}
      />

      <button onClick={handleFile}>Submit file</button>
      <button onClick={handleCollect}>Collect</button>
    </div>
  );
};

export default CollectElements;
