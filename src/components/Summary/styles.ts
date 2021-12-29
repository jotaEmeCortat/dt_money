import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  margin-top: -12rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      font-weight: 500;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      &.getIn {
        color: var(--green);
      }
      &.getOut {
        color: var(--red);
      }
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    margin-top: -10rem;

    div {
      padding: 1rem 1.5rem;

      strong {
        margin-top: 1rem;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
    }
  }

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
