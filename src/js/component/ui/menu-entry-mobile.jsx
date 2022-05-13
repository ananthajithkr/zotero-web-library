import PropTypes from 'prop-types';
import React, { memo } from 'react';

import NavItem from 'reactstrap/lib/NavItem';
import NavLink from 'reactstrap/lib/NavLink';
import { pick } from '../../common/immutable';

const MobileMenuEntry = ({ label, ...rest }) => {
	return (
		<NavItem>
			<NavLink
				{ ...pick(rest, ['className', 'href', 'onKeyDown']) }
				tabIndex={ -2 }
			>
				{ label }
			</NavLink>
		</NavItem>
	);
}

MobileMenuEntry.propTypes = {
	label: PropTypes.string,
}

export default memo(MobileMenuEntry);
