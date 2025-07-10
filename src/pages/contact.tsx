import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    // For now, we'll simulate a successful submission
    
    // Validation check (simple example)
    if (!formState.name || !formState.email || !formState.message) {
      setFormState(prev => ({
        ...prev,
        error: true
      }));
      return;
    }

    // Simulate successful form submission
    setFormState(prev => ({
      ...prev,
      submitted: true,
      error: false
    }));
  };

  return (
    <Layout
      title={`Contact | ${siteConfig.title}`}
      description="Contact AutoNateAI for inquiries about our AI-powered courses and workshops">
      <main className={styles.contactPage}>
        <section className={styles.contactHero}>
          <div className="container">
            <div className={styles.heroContent}>
              <Heading as="h1" className={styles.heroTitle}>
                Contact <span className="gradient-text-light">AutoNateAI</span>
              </Heading>
              <p className={styles.heroSubtitle}>
                Have questions about our courses or custom AI solutions for your academic institution?
                We're here to help.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contactFormSection}>
          <div className="container">
            <div className={styles.contactContainer}>
              <div className={styles.contactInfo}>
                <div className={styles.infoCard}>
                  <h2>Get in Touch</h2>
                  <p>
                    We're excited to hear from academic institutions, professors, researchers, and students 
                    interested in enhancing their research capabilities with AI.
                  </p>
                  
                  <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>✉️</div>
                      <div>
                        <h3>Email</h3>
                        <p>support@autonateal.com</p>
                      </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📍</div>
                      <div>
                        <h3>Location</h3>
                        <p>Silicon Valley, California</p>
                      </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>⏰</div>
                      <div>
                        <h3>Office Hours</h3>
                        <p>Monday-Friday: 9am-5pm PT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.formContainer}>
                {formState.submitted ? (
                  <div className={styles.thankYouMessage}>
                    <div className={styles.thankYouIcon}>✓</div>
                    <h2>Thank You!</h2>
                    <p>We've received your message and will get back to you shortly.</p>
                    <button 
                      className={styles.resetButton}
                      onClick={() => setFormState({
                        name: '',
                        email: '',
                        organization: '',
                        message: '',
                        submitted: false,
                        error: false
                      })}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <h2>Send Us a Message</h2>
                    
                    {formState.error && (
                      <div className={styles.errorMessage}>
                        Please fill out all required fields.
                      </div>
                    )}
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="organization">Organization/Institution</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactFAQ}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                Frequently Asked Questions
              </Heading>
            </div>
            
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>Can you create custom AI courses for our institution?</h3>
                <p>
                  Yes! We specialize in creating tailored AI learning experiences for academic 
                  institutions. Contact us with your specific needs and curriculum requirements.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>How interactive are your courses?</h3>
                <p>
                  Our courses feature hands-on AI tools, interactive exercises, custom templates, 
                  and real-time feedback systems designed specifically for academic applications.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>Do you offer academic discounts?</h3>
                <p>
                  Yes, we offer special pricing for academic institutions, research labs, and student groups.
                  Contact us for details on academic licensing options.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3>Can we deploy these courses on our LMS?</h3>
                <p>
                  Many of our courses can be integrated with popular Learning Management Systems.
                  We're happy to discuss integration options for your institution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
