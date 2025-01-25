import React from 'react';
import styled from 'styled-components';
import { X, Check } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        'Generate basic applications',
        '5 downloads per month',
        'Community support',
        'Basic templates'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      features: [
        'Unlimited app generation',
        'Unlimited downloads',
        'Priority support',
        'Advanced templates',
        'Custom branding',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Pro',
        'Custom templates',
        'Dedicated support',
        'SLA guarantee',
        'Team collaboration',
        'Advanced security'
      ]
    }
  ];

  return (
    <StyledModal>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <X className="w-6 h-6" />
        </button>
        <h2>Choose Your Plan</h2>
        <div className="plans-container">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <h3>{plan.name}</h3>
              <div className="price">{plan.price}</div>
              <div className="features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature">
                    <Check className="check-icon" />
                    {feature}
                  </div>
                ))}
              </div>
              <button className="select-button">
                {plan.name === 'Enterprise' ? 'Contact Us' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1000;
  }

  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to bottom right, #1a1a1a, #2d2d2d);
    border-radius: 20px;
    padding: 2rem;
    z-index: 1001;
    width: 90%;
    max-width: 1000px;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  h2 {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }

  .plans-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .plan-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    h3 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    .price {
      color: #fff;
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .feature {
      color: #fff;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;

      .check-icon {
        color: #4CAF50;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
      }
    }

    .select-button {
      margin-top: auto;
      background: linear-gradient(45deg, #af40ff, #5b42f3 60%, #00ddeb);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 10px;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 768px) {
    .modal-content {
      padding: 1rem;
      width: 95%;
    }

    .plans-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default PricingModal;