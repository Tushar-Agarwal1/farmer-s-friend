
function Services() {
  const links = [
    {
      title: "Integrated Agricultural Management Strategies",
      url: "/crop-suitability",
      description: "Enhancing Crop Suitability, Optimizing Irrigation Control, and Efficient Resource Management"
    },
    {
      title: "Weather Forecast Integration",
      url: "/weather-forecast",
      description: "Integrate weather forecast data for your region."
    },
    {
      title: "Community Forum",
      url: "/community-forum",
      description: "Connect with other farmers in the community forum."
    }
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <div key={index} className="card card-compact bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{link.title}</h2>
            <p>{link.description}</p>
            <figure><img src="https://th.bing.com/th/id/OIP.6Wu1VqrMvN6Nli9M7RlkxwHaE8?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Shoes" /></figure>
            <div className="card-actions justify-end">
              <a href={link.url} className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;