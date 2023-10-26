import { FeedbackButton } from './FeedbackButton/FeedbackButton';

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackButton />
    </div>
  );
};
