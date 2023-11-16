import React from 'react';
import { useSelector } from 'react-redux';

const SentimentAnalysis: React.FC = () => {
  const conversation = useSelector((state: any) => state.conversation);

  return (
    <div id="sentiment-analysis">
      <h2>Sentiment Analysis</h2>
      {conversation && conversation.sentimentScore ? (
        <div>
          <p>
            <strong>Sentiment Score:</strong> {conversation.sentimentScore}
          </p>
          <p>
            <strong>Sentiment:</strong>{' '}
            {conversation.sentimentScore > 0
              ? 'Positive'
              : conversation.sentimentScore < 0
              ? 'Negative'
              : 'Neutral'}
          </p>
        </div>
      ) : (
        <p>No sentiment analysis available for this conversation.</p>
      )}
    </div>
  );
};

export default SentimentAnalysis;