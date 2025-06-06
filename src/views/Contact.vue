<template>
  <div class="contact-container">
    <div class="header-section">
      <h1 class="main-title">Get in</h1>
      <h1 class="main-title accent">touch ——</h1>
    </div>
    <div class="contact-grid">
      <div class="contact-card">
        <div class="icon-wrapper">
          <svg
            class="contact-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <h3 class="contact-title">Email</h3>
        <p class="contact-description">
          Send me a message and I'll get back to you within 24 hours. Perfect for project inquiries
          and collaborations.
        </p>
        <div class="contact-tags">
          <span class="tag">Direct</span>
          <span class="tag">Professional</span>
        </div>
        <a href="mailto:thefoxxodev@gmail.com" class="contact-action"> Send me an Email </a>
      </div>
      <div class="contact-card">
        <div class="icon-wrapper">
          <svg
            class="contact-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.2a.084.084 0 0 0-.09.042c-.388.695-.822 1.6-1.127 2.32a18.524 18.524 0 0 0-5.336 0c-.305-.72-.74-1.625-1.127-2.32a.084.084 0 0 0-.09-.042A19.736 19.736 0 0 0 3.683 4.369a.077.077 0 0 0-.035.027C.533 9.09-.32 13.579.099 18.017a.087.087 0 0 0 .031.06c2.104 1.547 4.13 2.488 6.102 3.104a.084.084 0 0 0 .091-.027c.472-.65.893-1.34 1.262-2.066a.084.084 0 0 0-.045-.116c-.662-.25-1.29-.547-1.899-.884a.084.084 0 0 1-.008-.142c.127-.096.254-.195.375-.291a.084.084 0 0 1 .087-.01c3.967 1.813 8.27 1.813 12.206 0a.084.084 0 0 1 .088.009c.121.096.248.195.375.291a.084.084 0 0 1-.008.142c-.61.337-1.238.634-1.899.884a.084.084 0 0 0-.045.116c.37.726.79 1.416 1.262 2.066a.084.084 0 0 0 .091.027c1.972-.616 3.998-1.557 6.102-3.104a.084.084 0 0 0 .031-.06c.5-5.177-.838-9.637-3.252-13.621a.077.077 0 0 0-.035-.027ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.218 0 2.175 1.102 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.218 0 2.175 1.102 2.157 2.418 0 1.334-.939 2.419-2.157 2.419Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h3 class="contact-title">Discord</h3>
        <p class="contact-description">
          Connect with me on Discord for real-time discussions, project collaborations, or just to
          chat about tech and ideas.
        </p>
        <div class="contact-tags">
          <span class="tag">Network</span>
          <span class="tag">Fast reply</span>
        </div>
        <a href="#" target="_blank" class="contact-action"> Connect on Discord </a>
      </div>

      <!-- GitHub Card -->
      <div class="contact-card">
        <div class="icon-wrapper">
          <svg
            class="contact-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </div>
        <h3 class="contact-title">GitHub</h3>
        <p class="contact-description">
          Check out my code repositories, contribute to open source projects, or explore my
          development work.
        </p>
        <div class="contact-tags">
          <span class="tag">Code</span>
          <span class="tag">Open Source</span>
        </div>
        <a href="https://github.com/foxxo-dev" target="_blank" class="contact-action">
          View GitHub Profile
        </a>
      </div>

      <!-- More Options Card -->
      <div class="contact-card more-card">
        <div class="more-content">
          <h3 class="more-title">More ways to connect</h3>
          <div class="more-links">
            <a href="#" class="more-link">
              <span class="more-icon">💬</span>
              <span>Discord</span>
            </a>
            <a href="#" class="more-link">
              <span class="more-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17" cy="7" r="1.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="form-section">
      <div class="form-container">
        <h2 class="form-title">Send a Message</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="form.subject"
              class="form-input"
              placeholder="Project inquiry, collaboration, etc."
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              placeholder="Tell me about your project or what you'd like to discuss..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      isSubmitting: false,
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true

      try {
        // Simulate form submission
        // Send a webhook to a discord

        const webhookUrl = 'https://discord.com/api/webhooks/1380528993563971645/WsTh_Y8sJT-7oYKgtfhES9M1iXetsQi5Pt0diI7CMXO6mwjsPLcFgX0uHoH9LzvOMGWg'
        const payload = {
          content: `# New contact: ${this.form.name}\nEmail: ${this.form.email}\n\n## Subject: ${this.form.subject}\nMessage: ${this.form.message}\n-# ${new Date().toLocaleString()}`,
        }
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
        if (!response.ok) {
          alert('Failed to send message to the owner! [Err. 500-1]')
          throw new Error('Failed to send message')
        }

        // Here you would typically send the form data to your backend
        console.log('Form submitted:', this.form)

        // Reset form
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
        }

        alert('Message sent successfully!')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Error sending message. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>

<style scoped>
.contact-container {
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header-section {
  margin-bottom: 4rem;
  text-align: left;
}

.main-title {
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
  line-height: 1.1;
}

.main-title.accent {
  margin-top: -0.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.contact-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.contact-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.contact-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-tags {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-action {
  color: #4a9eff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact-action:hover {
  color: #6bb6ff;
}

.more-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
}

.more-content {
  text-align: center;
}

.more-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
}

.more-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.more-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 12px;
  transition: background-color 0.3s ease;
}

.more-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.more-icon {
  font-size: 1.25rem;
}

.explore-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.explore-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.form-section {
  max-width: 600px;
  margin: 0 auto;
}

.form-container {
  background: linear-gradient(135deg, #22aaff3a, rgba(255, 255, 255, 0.05));
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.form-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
}

.form-input,
.form-textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #4a9eff;
  background: rgba(255, 255, 255, 0.08);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  background: #4a9eff;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-btn:hover:not(:disabled) {
  background: #6bb6ff;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 1rem;
  }

  .main-title {
    font-size: 2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-card {
    padding: 1.5rem;
  }

  .form-container {
    padding: 2rem;
  }
}
</style>
