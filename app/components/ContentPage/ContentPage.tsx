

import React from 'react';
import { UtilityService } from '../../services/UtilityService';

const ContentPage = () => {
  const utilityService = new UtilityService();
  utilityService.utilityFunction();

  return <div>Content Page</div>;
};

export default ContentPage;