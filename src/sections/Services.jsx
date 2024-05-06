import ServiceCard from "../components/ServiceCard"
import { services } from "../constants/index"

const Services = () => {
  return (
    <div>
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard key={service.label}
          {...service} />
      ))}
      </section>
    </div>
  )
}

export default Services