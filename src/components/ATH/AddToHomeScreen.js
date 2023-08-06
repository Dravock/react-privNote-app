import React from 'react'
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';
import Logo_src from '../../includes/img/kss_logo_v_1.png'


function AddToHomeScreenComp() {
    return (
        <>  <AddToHomeScreen
            appId='Add-to-Homescreen React Live Demo'
            startAutomatically={true}
            startDelay={0}
            lifespan={30}
            skipFirstVisit={true}
            displayPace={0}
            customPromptContent={{
                src:Logo_src,
                cancelMsg: '',
                installMsg: 'Install',
                guidanceCancelMsg: ''
            }}
            customPromptElements={{
                container: 'athContainer',
                containerAddOns: '',
                banner: 'athBanner',
                logoCell: 'athLogoCell',
                logoCellAddOns: 'athContentCell',
                src:Logo_src,
                logo: 'athLogo',
                titleCell: 'athTitleCell',
                titleCellAddOns: 'athContentCell',
                title: 'athTitle',
                cancelButtonCell: 'athCancelButtonCell',
                cancelButtonCellAddOns: 'athButtonCell',
                cancelButton: 'athCancelButton',
                installButtonCell: 'athInstallButtonCell',
                installButtonCellAddOns: 'athButtonCell',
                installButton: 'athInstallButton',
                installButtonAddOns: 'button',
                guidance: 'athGuidance',
                guidanceImageCell: 'athGuidanceImageCell',
                guidanceImageCellAddOns: '',
                guidanceCancelButton: 'athGuidanceCancelButton'
            }}
        />
        </>
    )
}

export default AddToHomeScreenComp