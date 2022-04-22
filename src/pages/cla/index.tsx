import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import clsx from 'clsx';
import { TrackedLink } from "@site/src/trackedComponents/TrackedLink";
import { TrackedMain } from '@objectiv/tracker-react';

export default function CLA() {
  const context = useDocusaurusContext();
  const {siteConfig} = context;

  return (
    <Layout
      title={siteConfig?.title}
      description={siteConfig?.tagline}> {/*Description will go into a meta tag in <head />*/}
      <TrackedMain id={'cla-document'} className={clsx('container', styles.contentContainer)}>
        <h1>Objectiv B.V. Contributor License Agreement ("Agreement") v1.0</h1>
        <p>
          This agreement is based on the Apache Software Foundation&nbsp;
          <TrackedLink href="https://www.apache.org/licenses/icla.pdf">
            Individual Contributor License V2.2
          </TrackedLink>, 
          with <span className={clsx(styles.highlighted)}>highlighted</span> modifications<sup>1</sup>.
        </p>
        <div>
          <p><span className={clsx(styles.highlighted)}>Thank you for contributing to Objectiv!</span></p>
          <p>
            To clarify the intellectual property license granted with Contributions from any person or 
            entity, <span className={clsx(styles.highlighted)}>Objectiv B.V. (“Objectiv”)</span> must have on 
            file a signed Contributor License Agreement ("CLA") from each Contributor, indicating agreement 
            with the license terms below. This agreement is for your protection as a Contributor as well as 
            the protection of <span className={clsx(styles.highlighted)}>Objectiv</span> and its users. It 
            does not change your rights to use your own Contributions for any other purpose.
          </p>
          <p>
            Please complete and sign this Agreement. Read this document carefully before signing and keep a 
            copy for your records. <span className={clsx(styles.highlighted)}>If you have questions about 
            these terms, please contact us at <TrackedLink to="mailto:hi@objectiv.io">hi@objectiv.io
            </TrackedLink></span>. 
          </p>

          <p>---</p>

          <p>
            You accept and agree to the following terms and conditions for Your Contributions (present and 
            future) that you submit to <span className={clsx(styles.highlighted)}>Objectiv</span>. Except for 
            the license granted herein to <span className={clsx(styles.highlighted)}>Objectiv</span> and 
            recipients of software distributed by <span className={clsx(styles.highlighted)}>Objectiv</span>, 
            You reserve all right, title, and interest in and to Your Contributions.
          </p>

          <h3>1. Definitions.</h3>
          <p>
            <em>"You"</em> (or <em>"Your"</em>) shall mean the copyright owner or legal entity authorized by 
            the copyright owner that is making this Agreement 
            with <span className={clsx(styles.highlighted)}>Objectiv</span>. For legal entities, the entity 
            making a Contribution and all other entities that control, are controlled by, or are under common 
            control with that entity are considered to be a single Contributor. For the purposes of this 
            definition, <em>"control"</em> means (i) the power, direct or indirect, to cause the direction or 
            management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent 
            (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity. 
          </p>
          <p>
            <em>"Contribution"</em> shall mean any original work of authorship, including any modifications 
            or additions to an existing work, that is intentionally submitted by You 
            to <span className={clsx(styles.highlighted)}>Objectiv</span> for inclusion in, or documentation 
            of, any of the products owned or managed 
            by <span className={clsx(styles.highlighted)}>Objectiv</span> (the "Work"). For the purposes of 
            this definition, <em>"submitted"</em> means any form of electronic, verbal, or written 
            communication sent to <span className={clsx(styles.highlighted)}>Objectiv</span> or its 
            representatives, including but not limited to communication on electronic mailing lists, source 
            code control systems, and issue tracking systems that are managed by, or on behalf 
            of, <span className={clsx(styles.highlighted)}>Objectiv</span> for the purpose of discussing and 
            improving the Work, but excluding communication that is conspicuously marked or otherwise 
            designated in writing by You as "Not a Contribution."
          </p>

          <h3>2. Grant of Copyright License.</h3>
          <p>
            Subject to the terms and conditions of this Agreement, You hereby grant 
            to <span className={clsx(styles.highlighted)}>Objectiv</span> and to recipients of software 
            distributed by <span className={clsx(styles.highlighted)}>Objectiv</span> a perpetual, worldwide, 
            non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare 
            derivative works of, publicly display, publicly perform, sublicense, and distribute Your 
            Contributions and such derivative works.
          </p>

          <h3>3. Grant of Patent License.</h3> 
          <p>
            Subject to the terms and conditions of this Agreement, You hereby grant 
            to <span className={clsx(styles.highlighted)}>Objectiv</span> and to recipients of software 
            distributed by <span className={clsx(styles.highlighted)}>Objectiv</span> a perpetual, worldwide, 
            non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent 
            license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, 
            where such license applies only to those patent claims licensable by You that are necessarily 
            infringed by Your Contribution(s) alone or by combination of Your Contribution(s) with the Work 
            to which such Contribution(s) was submitted. If any entity institutes patent litigation against 
            You or any other entity (including a cross-claim or counterclaim in a lawsuit) alleging that your 
            Contribution, or the Work to which you have contributed, constitutes direct or contributory 
            patent infringement, then any patent licenses granted to that entity under this Agreement for 
            that Contribution or Work shall terminate as of the date such litigation is filed.
          </p>

          <p>
            4. You represent that you are legally entitled to grant the above license. If your employer(s) 
            has rights to intellectual property that you create that includes your Contributions, you 
            represent that you have received permission to make Contributions on behalf of that employer, 
            that your employer has waived such rights for your contributions 
            to <span className={clsx(styles.highlighted)}>Objectiv</span>, or that your employer has executed 
            a separate Corporate CLA with <span className={clsx(styles.highlighted)}>Objectiv</span>.
          </p>

          <p>
            5. You represent that each of Your Contributions is Your original creation (see section 7 for 
            submissions on behalf of others). You represent that Your Contribution submissions include 
            complete details of any third-party license or other restriction (including, but not limited to, 
            related patents and trademarks) of which you are personally aware and which are associated with 
            any part of Your Contributions.
          </p>
          
          <p>
            6. You are not expected to provide support for Your Contributions, except to the extent You 
            desire to provide support. You may provide support for free, for a fee, or not at all. Unless 
            required by applicable law or agreed to in writing, You provide Your Contributions on an "AS IS" 
            BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, 
            without limitation, any warranties or conditions of TITLE, NON- INFRINGEMENT, MERCHANTABILITY, or 
            FITNESS FOR A PARTICULAR PURPOSE.
          </p>

          <p>
            7. Should You wish to submit work that is not Your original creation, You may submit it 
            to <span className={clsx(styles.highlighted)}>Objectiv</span> separately from any Contribution, 
            identifying the complete details of its source and of any license or other restriction 
            (including, but not limited to, related patents, trademarks, and license agreements) of which you 
            are personally aware, and conspicuously marking the work as "Submitted on behalf of a 
            third-party: [named here]".
          </p>

          <p>
            8. You agree to notify <span className={clsx(styles.highlighted)}>Objectiv</span> of any facts or 
            circumstances of which you become aware that would make these representations inaccurate in any 
            respect.
          </p>

          <p>
            This is a legal contract containing Personally Identifiable Information. Please refer 
            to <span className={clsx(styles.highlighted)}><TrackedLink to="https://objectiv.io/privacy/">
            https://objectiv.io/privacy/</TrackedLink></span> for the policy governing how this information 
            is used and shared.
          </p>

          <p className={clsx(styles.footnote)}>
            <sup>1</sup>Two sentences were deleted that apply specifically to the Apache foundation: 
            1) “Please complete and sign this Agreement, and then email a pdf copy to secretary@apache.org 
            only (do not copy any other persons or lists).” and 2) “In return, the Foundation shall not use 
            Your Contributions in a way that is contrary to the public benefit or inconsistent with its 
            nonprofit status and bylaws in effect at the time of the Contribution.“
          </p>
        </div>
      </TrackedMain>
    </Layout>
  );
}