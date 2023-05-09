import React, { useState } from 'react';
import moment from 'moment'

export default function DateFormatPreview() {
    const [value, setValue] = useState("YYYY Do of MMM [at] hh:mma")
  return (
    <div>
        <label style={{display: "block", margin: "0.2rem 0"}} htmlFor='date-format-preview'>
          This format:
        </label>
        <input
          id="date-format-preview"
          style={{
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '0.75rem',
            fontSize: '1.1rem',
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p style={{margin: "0.5rem 0 0.2rem 0"}}>Will be renders as:</p>
        <strong style={{fontSize: "1.1rem"}}>{moment().format(value)}</strong>
    </div>
  );
}