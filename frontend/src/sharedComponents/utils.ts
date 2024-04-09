export const dateFormatter = ({ date }: any) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedDate;
};

export const getTooltipMessage = (sustainabilityScore: number): string => {
  let message: string;

  switch (sustainabilityScore) {
    case 1:
      message =
        'Poor sustainability score. The selected destination has a significant environmental impact due to high carbon emissions and resource consumption.';
      break;
    case 2:
      message =
        'Low sustainability score. The chosen destination has limited environmental initiatives and may pose challenges in preserving natural resources.';
      break;
    case 3:
      message =
        'Moderate sustainability score. The selected destination demonstrates some efforts towards sustainability but still has room for improvement.';
      break;
    case 4:
      message =
        'Good sustainability score. The chosen destination actively promotes eco-friendly practices, contributing positively to environmental conservation.';
      break;
    case 5:
      message =
        'Excellent sustainability score. The selected destination is a leader in sustainable development, implementing comprehensive strategies to minimize ecological impact.';
      break;
    default:
      message = 'Invalid sustainability score. Please provide a value between 1 and 5.';
  }

  return message;
};
