import React from 'react'
import { Dropdown } from 'semantic-ui-react'

import { countryOptions } from '../common'

const ShapesDropdown = (props) => (
  <Dropdown placeholder='Select Country' className="dark" fluid search selection options={countryOptions} />
)

export default ShapesDropdown
