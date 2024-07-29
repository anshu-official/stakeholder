import React from 'react';
import Card from './cards'; // Ensure the path is correct
import './App.css';
import Block1 from './Block1';
import volunteer from './images/voluteer.png'; 
import anc from './images/anc.png';
import abc from './images/abc.jpg';
import ubn from './images/ubn.png'



const bioContent1 = `
  <p><strong>Description:</strong> Individuals who contribute their time and skills to support tree plantation projects.</p>
  <p><strong>Tab 1: Volunteers</strong></p>
  <strong>John Doe</strong>
  <ul>
    <li><strong>Contact Information:</strong> john.doe@email.com | +91-XXXXXXXXXX</li>
    <li><strong>Bio:</strong> An environmental enthusiast with a passion for afforestation. Active in local tree planting drives and educational outreach programs.</li>
    <li><strong>Projects Involved:</strong> Van Mahotsav, Green India Mission</li>
  </ul>
  <strong>Jane Smith</strong>
  <ul>
    <li><strong>Contact Information:</strong> jane.smith@email.com | +91-XXXXXXXXXX</li>
    <li><strong>Bio:</strong> Dedicated to community service with extensive experience in organizing tree planting events and workshops.</li>
    <li><strong>Projects Involved:</strong> MGNREGA Tree Plantation, Green Belt Movement</li>
  </ul>
`;

const bioContent2 = `
  <p><strong>Description:</strong> Non-Governmental Organizations working on environmental conservation and tree plantation.</p>
  <p><strong>Tab 2: NGOs</strong></p>
  <strong>Green Earth Foundation</strong>
  <ul>
    <li><strong>Contact Information:</strong> contact@greenearth.org | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> To promote sustainable development through large-scale afforestation projects and community engagement.</li>
    <li><strong>Projects Involved:</strong> Bharat Nirman Programme, Green India Mission</li>
  </ul>
  <strong>Tree Guardians Network</strong>
  <ul>
    <li><strong>Contact Information:</strong> info@treeguardians.org | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> Focused on creating green belts in urban areas and educating communities about the importance of tree cover.</li>
    <li><strong>Projects Involved:</strong> Green Belt Movement, Van Mahotsav</li>
  </ul>
`;

const bioContent3 = `
  <p><strong>Description:</strong> Companies and businesses supporting tree plantation through CSR initiatives and partnerships.</p>
  <p><strong>Tab 3: Corporates</strong></p>
  <strong>EcoTech Solutions Ltd.</strong>
  <ul>
    <li><strong>Contact Information:</strong> csr@ecotech.com | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> Committed to environmental sustainability through corporate social responsibility programs, including tree planting and conservation.</li>
    <li><strong>Projects Involved:</strong> Pradhan Mantri Krishi Sinchai Yojana (PMKSY) Green Cover, MGNREGA Tree Plantation</li>
  </ul>
  <strong>Green Future Inc.</strong>
  <ul>
    <li><strong>Contact Information:</strong> contact@greenfuture.com | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> Dedicated to reducing carbon footprint through green initiatives and supporting local tree planting efforts.</li>
    <li><strong>Projects Involved:</strong> Bharat Nirman Programme, Green India Mission</li>
  </ul>
`;

const bioContent4 = `
  <p><strong>Description:</strong> Government departments and agencies involved in policy-making and implementation of tree plantation projects.</p>
  <p><strong>Tab 4: Government Bodies</strong></p>
  <strong>Ministry of Environment, Forest and Climate Change (MoEFCC)</strong>
  <ul>
    <li><strong>Contact Information:</strong> moefcc@nic.in | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> Responsible for formulating and implementing policies related to environmental conservation and forest management.</li>
    <li><strong>Projects Involved:</strong> Green India Mission, Van Mahotsav</li>
  </ul>
  <strong>Department of Rural Development</strong>
  <ul>
    <li><strong>Contact Information:</strong> ruraldev@nic.in | +91-XXXXXXXXXX</li>
    <li><strong>Mission:</strong> Focuses on rural development initiatives, including the integration of tree planting with employment generation schemes.</li>
    <li><strong>Projects Involved:</strong> MGNREGA Tree Plantation, Rural Employment Generation Programme (REGP) Tree Plantation</li>
  </ul>
`;

const App = () => {
  return (
    <div className="app">
      <Block1 />
      
      <Card
        heading="Volunteers"
        profileImage={volunteer}
        bio={bioContent1}
      />
      <Card
        heading="NGOs"
        profileImage={anc}
        bio={bioContent2}
      />
      <Card
        heading="Corporates"
        profileImage={ubn}
        bio={bioContent3}
      />
      <Card
        heading="Government Bodies"
        profileImage={abc}
        bio={bioContent4}
      />
    </div>
  );
};

export default App;
