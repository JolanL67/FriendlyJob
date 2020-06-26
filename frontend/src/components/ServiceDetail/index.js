import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import { Link, useParams } from 'react-router-dom';
import { getServiceBySlug, capitalize } from 'src/utils';
import JoberService from './JoberService';
import './serviceDetail.scss';

function ServiceDetail({ serviceList, getServiceName, getSixJobWorker, jobWorkers, loadingOnServiceDetail }) {
  const { slug } = useParams();
  useEffect(() => {
    getServiceName(slug);
    getSixJobWorker();
  }, []);

  const service = getServiceBySlug(serviceList, slug);
  return (
    <div className="service_detail">
      <div className="service_detail_title">
        <h2 className="service_detail_title-content">{service.title}</h2>
      </div>
      <div className="service_detail_presentation">{service.description}</div>
      <div className="service_details_jobworker">
        <div className="service_details_jobworker_card">
          {loadingOnServiceDetail && <Loader /> }
          {!loadingOnServiceDetail && (
            jobWorkers.map((jobWorker) => {
              const JobWorkerRate = jobWorker.user.jobWorkerDemands;
               //console.log(JobWorkerRate);
              return (
                <div className="service_details_jobworker_card-item">
                  <JoberService jobWorker={jobWorker} jobWorkerStar={JobWorkerRate} getServiceName={getServiceName} />
                </div>
              );
            })
          )}
        </div>
        <div className="service_details_link">
          <Link className="service_details_link-item" to={`/services/${slug}/jobworkers/`}>Voir plus de jobworkers</Link>
        </div>
      </div>
    </div>
  );
}

ServiceDetail.propTypes = {
  serviceList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ServiceDetail;
