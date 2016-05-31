var data = [
			{
				id : "gae",
				name: "Google App Engine",
				company: "Google",
				website: 'http://cloud.google.com',
				languages : ["Node", "Go", "Python", "Java"],
				features : ['Automatic Scaling', 'Authentication', 'Memcache', 'Search', 'Logging', 'Task Queues', 'Cron Jobs', 'Traffic Splitting', 'Security Scanner'],
				notes: "Google App Engine is a platform for building scalable web applications \
				and mobile backends. App Engine provides you with built-in services and APIs such \
				as NoSQL datastores, memcache, and a user authentication API, common to most applications.\
				App Engine will scale your application automatically in response to the amount of traffic \
				it receives so you only pay for the resources you use. Just upload your code and Google \
				will manage your app's availability. There are no servers for you to provision or maintain."

			},
			{
				id : "heroku",
				name : "Heroku",
				company: 'Salesforce',
				website: 'http://heroku.com',
				languages : ['Node', 'Ruby', 'Java', 'PHP', 'Python', 'Go', 'Scala', 'Clojure'],
				notes: 'Heroku is a cloud platform based on a managed container system, \
				with integrated data services and a powerful ecosystem, for deploying \
				and running modern apps. The Heroku developer experience is an app-centric \
				approach for software delivery, integrated with today’s most popular developer tools and workflows.',
				features: ['Memcache', 'Monitoring', 'Logging', 'Scalable']
			},
			{
				id: 'firebase',
				name: 'Firebase',
				company: 'Google',
				website: 'https://firebase.google.com/',
				categories: ['Database', 'Notifications'],
				sdks: ['iOS', 'Android', 'Node', 'Java', 'C++', 'Rest'],
				notes: "Firebase is a mobile platform that helps you quickly develop\
				 high-quality apps, grow your user base, and earn more money. \
				 Firebase is made up of complementary features that you can mix-and-match to \
				 fit your needs. Implementing Firebase is quick and easy. With intuitive APIs \
				 packaged into a single SDK, you can focus on solving your customers' problems \
				 and not waste time building complex infrastructure.",
				features: ['Realtime Database', 'Authentication', 'Cloud Messaging', 'Storage', 
				'Hosting', 'Remote Config', 'Test Lab', 'Crash Reporting', 'Notifications', 
				'App Indexing', 'Dynamic Links', 'Invites', 'AdWords']
			},
			{
				id: 'mongodb',
				name: 'MongoDB',
				company: 'MongoDB',
				categories: ['Database'],
				website: 'http://mongodb.com',
				sdks: ['Python', 'Node', 'C++', 'Java'],
				notes: "MongoDB is a cross-platform and open-source document-oriented database, \
				a kind of NoSQL database. As a NoSQL database, MongoDB shuns the relational \
				database’s table-based structure to adapt JSON-like documents that have dynamic \
				schemas which it calls BSON. This makes data integration for certain types of \
				applications faster and easier. MongoDB is built for scalability, high availability \
				and performance from a single server deployment to large and complex multi-site infrastructures."
			}
		];