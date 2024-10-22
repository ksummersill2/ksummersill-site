import ReactGA from 'react-ga4';

export const initGA = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
};

// Add GoatCounter initialization
export const initGoatCounter = (code: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `//gc.zgo.at/count.js`;
  script.setAttribute('data-goatcounter', `https://${code}.goatcounter.com/count`);
  document.head.appendChild(script);
};

// Add GoatCounter page view logging
export const logGoatCounterPageView = () => {
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({
      path: window.location.pathname + window.location.search,
    });
  }
};