import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Unus",
    // Svg: require('/path/to/svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam
        consequat. Lorem ipsum dolor sit amet
      </>
    ),
  },
  {
    title: "Duo",
    // Svg: require('/path/to/svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam
        consequat. Lorem ipsum dolor sit amet
      </>
    ),
  },
  {
    title: "Tres",
    // Svg: require('/path/to/svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam
        consequat. Lorem ipsum dolor sit amet
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} alt={title} /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
