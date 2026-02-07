import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from '../contexts/TranslationContext';
import '../assets/styles/Timeline.scss'

function Education() {
  const { t } = useTranslation();
  
  return (
    <div id="education">
      <div className="items-container">
        <h1>{t.education.title}</h1>
        <VerticalTimeline>
          {t.education.degrees.map((degree, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
              contentArrowStyle={{ borderRight: '7px solid  white' }}
              date={degree.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            >
              <h3 className="vertical-timeline-element-title">{degree.degree}</h3>
              <h4 className="vertical-timeline-element-subtitle">{degree.institution}</h4>
              {degree.activities && (
                <p><strong>{degree.activitiesLabel}:</strong> {degree.activities}</p>
              )}
              {degree.technologies && (
                <p><strong>{degree.technologiesLabel}:</strong> {degree.technologies}</p>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;

