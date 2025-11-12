import React, {useRef} from 'react';

export interface TermsDialogProps {
    /** A unique id for the dialog element (useful for aria-labelledby) */
    id?: string;
}

export const TermsDialog: React.FC<TermsDialogProps> = ({id = 'terms-dialog'}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const close = () => dialogRef.current?.close();

    return (
        // Use native dialog for accessibility; keep markup deterministic and simple.
        <dialog id={id} ref={dialogRef} aria-labelledby={`${id}-title`} className="terms-dialog">
            <form method="dialog">
                <h2 id={`${id}-title`}>Terms and Conditions of Use for Safe-Link</h2>
                <div className="terms-content" style={{maxHeight: '50vh', overflow: 'auto'}}>
                    <p>
                        Welcome to Safe-Link! This website ("Safe-Link" or "the Service") is a free-to-use service
                        designed to assist users in checking the potential safety of a provided link. By accessing or
                        using Safe-Link, you ("User" or "you") agree to be bound by these Terms and Conditions of Use
                        ("Terms"). If you do not agree to these Terms, please do not use the Service.
                    </p>

                    <ol>
                        <li>
                            <strong>Acceptance of Terms</strong>
                            <p>
                                By using Safe-Link, you acknowledge that you have read, understood, and agree to be bound
                                by these Terms, as well as our Privacy Policy (if you develop one). These Terms
                                constitute a legally binding agreement between you and Safe-Link.
                            </p>
                        </li>

                        <li>
                            <strong>Description of Service</strong>
                            <p>
                                Safe-Link provides a free online tool that attempts to analyze submitted URLs and provide
                                an indication of their potential safety. This service is offered for informational
                                purposes only and is intended to be a helpful resource, not a definitive authority on
                                link security.
                            </p>
                        </li>

                        <li>
                            <strong>"As Is" and "As Available" Disclaimer</strong>
                            <p>
                                The Safe-Link service is provided on an "as is" and "as available" basis, without any
                                warranties of any kind, either express or implied. To the fullest extent permissible
                                pursuant to applicable law, Safe-Link disclaims all warranties, express or implied,
                                including, but not limited to, implied warranties of merchantability, fitness for a
                                particular purpose, non-infringement, and accuracy. Safe-Link does not warrant that the
                                Service will be uninterrupted, error-free, secure, or free of viruses or other harmful
                                components.
                            </p>
                        </li>

                        <li>
                            <strong>No Guarantee of Accuracy</strong>
                            <p>
                                While Safe-Link strives to provide useful information, we do not guarantee 100% accuracy,
                                reliability, or completeness in determining if a link is safe. The methodologies used are
                                designed to identify potential threats, but new threats emerge constantly, and some
                                malicious links may not be detected. Conversely, some legitimate links may be flagged
                                incorrectly. You should always exercise caution and discretion when clicking on any link,
                                regardless of Safe-Link's assessment.
                            </p>
                        </li>

                        <li>
                            <strong>Limitation of Liability</strong>
                            <p>
                                In no event shall Safe-Link, its operators, affiliates, or licensors be liable for any
                                direct, indirect, incidental, special, consequential, or punitive damages, including but
                                not limited to, damages for loss of profits, goodwill, data, or other intangible losses,
                                resulting from: the use or inability to use the Service; the accuracy or inaccuracy of any
                                information provided by the Service; unauthorized access to or alteration of your
                                transmissions or data; statements or conduct of any third party on the Service; or any
                                other matter relating to the Service.
                            </p>
                        </li>

                        <li>
                            <strong>User Responsibilities</strong>
                            <p>
                                You agree to use Safe-Link only for lawful purposes and in a manner that does not infringe
                                the rights of, or restrict or inhibit the use and enjoyment of this Service by any third
                                party. You are solely responsible for any links you submit to the Service.
                            </p>
                        </li>

                        <li>
                            <strong>Data Privacy</strong>
                            <p>
                                Safe-Link is committed to protecting your privacy. We do not store any personal data about
                                users. The links submitted for checking are processed for the sole purpose of providing
                                the Service and are not linked to any identifiable user information.
                            </p>
                        </li>

                        <li>
                            <strong>Modifications to Terms</strong>
                            <p>
                                Safe-Link reserves the right, at its sole discretion, to modify or replace these Terms at
                                any time. Your continued use of the Service after any such changes constitutes your
                                acceptance of the new Terms.
                            </p>
                        </li>

                        <li>
                            <strong>Termination</strong>
                            <p>
                                Safe-Link reserves the right to terminate or suspend your access to the Service, without
                                prior notice or liability, for any reason whatsoever, including without limitation if you
                                breach the Terms.
                            </p>
                        </li>

                        <li>
                            <strong>Governing Law</strong>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of [Insert
                                Jurisdiction, e.g., the State of Israel], without regard to its conflict of law
                                provisions.
                            </p>
                        </li>

                        <li>
                            <strong>Entire Agreement</strong>
                            <p>
                                These Terms constitute the entire agreement between you and Safe-Link regarding your use
                                of the Service, superseding any prior agreements between you and Safe-Link regarding your
                                use of the Service.
                            </p>
                        </li>

                        <li>
                            <strong>Contact Information</strong>
                            <p>
                                If you have any questions about these Terms, please contact us at [Insert Contact Email
                                Address].
                            </p>
                        </li>
                    </ol>
                </div>

                <menu style={{display: 'flex', justifyContent: 'flex-end', gap: '8px', paddingTop: '12px'}}>
                    <button type="button" onClick={close} className="btn">Close</button>
                </menu>
            </form>
        </dialog>
    );
};
